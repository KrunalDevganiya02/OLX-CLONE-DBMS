from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List,Any,Dict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory data for simplicity. In a real-world scenario, you'd use a database.
items = []
users = {}


# class User(BaseModel):
#     username: str
#     password: str


# class Item(BaseModel):
#     name: str
#     item:str
#     item_name:str
#     bidder:str
#     bid_amount:int
#     description: str
#     starting_bid: int
#     current_bid: int
#     seller: str


# @app.post('/register', response_model=dict)
# def register_user(user: User):
#     if user.username not in users:
#         users[user.username] = {'password': user.password, 'balance': 1000}
#         return {'message': 'User registered successfully'}
#     else:
#         raise HTTPException(status_code=400, detail='User already exists')


# @app.post('/login', response_model=dict)
# def login_user(user: User):
#     if user.username in users and users[user.username]['password'] == user.password:
#         return {'message': 'Login successful'}
#     else:
#         raise HTTPException(status_code=401, detail='Invalid username or password')


@app.post('/list')
def list_item(item_name:str,description:str,s_bid:int):
    # items.append(item.dict())
    print(item_name,description,s_bid)
    return {'message': 'Item listed successfully'}


@app.post('/bid')
def place_bid(item_name: str, bidder: str, bid_amount: int):
    print(item_name,bidder,bid_amount)
    for item in items:
        if item['name'] == item_name:
            if bid_amount > item['current_bid']:
                item['current_bid'] = bid_amount
                return {'message': 'Bid placed successfully'}
            else:
                raise HTTPException(status_code=400, detail='Bid amount must be higher than the current bid')

    raise HTTPException(status_code=404, detail='Item not found')
