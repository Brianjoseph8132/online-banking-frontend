from models import BankAccount, db, User, Transaction
from flask import jsonify, request
from werkzeug.security import generate_password_hash
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import Blueprint

account_bp = Blueprint("account_bp", __name__)

# Create Bank Account API
@account_bp.route("/create_account", methods=["POST"])
@jwt_required()
def create_account():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if not user:
        return jsonify({"message": "User not found"}), 404

    if user.bank_account:
        return jsonify({"message": "User already has a bank account"}), 400

    data = request.get_json()
    initial_deposit = float(data.get('initial_deposit', 0.0))

    # Validate deposit amount
    if initial_deposit < 0:
        return jsonify({"message": "Deposit amount cannot be negative"}), 400

    # Create new bank account
    new_account = BankAccount(balance=initial_deposit, user_id=user.id)
    db.session.add(new_account)
    db.session.flush()  # This assigns an ID to new_account without committing
    
    # Record initial deposit if amount > 0
    if initial_deposit > 0:
        transaction = Transaction(
            type="deposit",
            amount=initial_deposit,
            bank_account_id=new_account.id  # Now has a valid ID
        )
        db.session.add(transaction)
    
    db.session.commit()  # Commit both objects together

    return jsonify({
        "message": "Bank account created successfully",
        "account_id": new_account.id,
        "balance": new_account.balance
    }), 201


# Dashboard API
@account_bp.route("/balance", methods=["GET"])
@jwt_required()
def balance():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if not user or not user.bank_account:
        return jsonify({"message": "Unauthorized or No Bank Account"}), 401

    return jsonify({"balance": user.bank_account.balance}), 200

# Transaction API (Deposit or Withdraw)
@account_bp.route("/transaction", methods=["POST"])
@jwt_required()
def transaction():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if not user:
        return jsonify({"message": "User not found"}), 404

    if not user.bank_account:
        return jsonify({"message": "No bank account found"}), 404

    data = request.get_json()
    action = data.get("action")
    amount = data.get("amount")

    # Convert amount to float if it's a string
    try:
        amount = float(amount)
    except (ValueError, TypeError):
        return jsonify({"message": "Invalid amount"}), 400

    if action == "deposit":
        user.bank_account.deposit(amount)
        db.session.commit()
        return jsonify({"message": "Deposit successful"}), 200
    elif action == "withdraw":
        if user.bank_account.balance >= amount:
            user.bank_account.withdraw(amount)
            db.session.commit()
            return jsonify({"message": "Withdraw successful"}), 200
        else:
            return jsonify({"message": "Insufficient balance"}), 400
    else:
        return jsonify({"message": "Invalid action"}), 400

# Deposit API
@account_bp.route("/deposit", methods=["POST"])
@jwt_required()
def deposit():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if not user or not user.bank_account:
        return jsonify({"message": "Unauthorized or No Bank Account"}), 401

    data = request.get_json()
    amount = data.get("amount")

    user.bank_account.deposit(amount)
    db.session.commit()
    return jsonify({"message": "Deposit successful"}), 200

# Withdraw API
@account_bp.route("/withdraw", methods=["POST"])
@jwt_required()
def withdraw():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if not user or not user.bank_account:
        return jsonify({"message": "Unauthorized or No Bank Account"}), 401

    data = request.get_json()
    amount = data.get("amount")

    if user.bank_account.balance >= amount:
        user.bank_account.withdraw(amount)
        db.session.commit()
        return jsonify({"message": "Withdraw successful"}), 200
    else:
        return jsonify({"message": "Insufficient balance"}), 400



# Transaction History API
@account_bp.route("/transaction_history", methods=["GET"])
@jwt_required()
def transaction_history():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if not user:
        return jsonify({"message": "User not found"}), 404

    if not user.bank_account:
        return jsonify({"message": "No bank account found"}), 404

    # Fetch all transactions for the user's bank account
    transactions = Transaction.query.filter_by(bank_account_id=user.bank_account.id).all()

    # Format the transactions for the response
    transaction_history = [
        {
            "id": transaction.id,
            "type": transaction.type,
            "amount": transaction.amount,
            "timestamp": transaction.timestamp.isoformat(),
        }
        for transaction in transactions
    ]

    return jsonify({"transactions": transaction_history}), 200


@account_bp.route("/has_account", methods=["GET"])
@jwt_required()
def has_account():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    if not user:
        return jsonify({"message": "User not found"}), 404
    
    has_account = user.bank_account is not None
    return jsonify({"has_account": has_account}), 200