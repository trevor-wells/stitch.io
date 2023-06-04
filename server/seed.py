#!/usr/bin/env python3
from random import choice as rc, randint
from faker import Faker
from app import app
from models import db, User, Game, Review, Library, Friend
fake = Faker()

users_list = {"username": "aspiringluddite", "password": "trevor",   "avatar_url": "https://wallpapercave.com/wp/wp3666284.jpg"},\
             {"username": "Jawn",            "password": "john",     "avatar_url": "https://media.licdn.com/dms/image/C4E03AQEjjspFv6c0xw/profile-displayphoto-shrink_400_400/0/1661197357261?e=1691020800&v=beta&t=A67ezMKATS6_3wVzkD4Nc7wf9LjOjAlwypof2s4_Xos"},\
             {"username": "Peetur",          "password": "peter",    "avatar_url": "https://media.licdn.com/dms/image/C5603AQEEUuODkSHBiQ/profile-displayphoto-shrink_800_800/0/1581614413079?e=1691020800&v=beta&t=-nRrrbSr0zIJsesbCRFRcJzCbXj2_1CoaGGSMAIbbas"},\
             {"username": "BigMike",         "password": "mike",     "avatar_url": "https://media.licdn.com/dms/image/C5603AQGYPvo9-tzGgg/profile-displayphoto-shrink_800_800/0/1661324635502?e=1691020800&v=beta&t=48YlIfj7KiGub3aYQFsFn16CYXeY4QAvIWnVIm1qqio"},\
             {"username": "LSlayer",         "password": "lauren",   "avatar_url": "https://media.licdn.com/dms/image/D5635AQG9nPj03of0vA/profile-framedphoto-shrink_800_800/0/1685659316059?e=1686337200&v=beta&t=ywzRigtBkWpMzAFttlVViozkNjxVttcB09ybq1bAxlQ"},\
             {"username": "Alelda",          "password": "luna",     "avatar_url": "https://media.licdn.com/dms/image/D4D03AQGMyixTC9xBpw/profile-displayphoto-shrink_800_800/0/1677365550079?e=1691020800&v=beta&t=ZIRpCzz4OCNXfH3XS23qxx9n74QGf9I5JnXNjcerzkI"},\
             {"username": "Angel",           "password": "angela",   "avatar_url": "https://media.licdn.com/dms/image/D5635AQGV2ogspDqatA/profile-framedphoto-shrink_800_800/0/1681421347768?e=1686337200&v=beta&t=ogIsMTOt0y2gLhHyubHwo3Qh2DeSbV-QBqrXe5MZkhI"},\
             {"username": "SterlingSilver",  "password": "sterling", "avatar_url": "https://media.licdn.com/dms/image/D4E03AQEoSSLrCiBRiw/profile-displayphoto-shrink_800_800/0/1682359181635?e=1691020800&v=beta&t=9YRL-kU1x77qS0Ilo5Hkfw1g5hAjVYX5Bic6hCM476w"}

games_list = {"title": "The Legend of Zelda: Tears of the Kingdom",
              "image_url": "https://images.nintendolife.com/880243a8baed2/switch-tloz-totk-artwork-01.large.jpg",
              "description": "In this sequel to the Legend of Zelda: Breath of the Wild game, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?",
              "genre": "Action-Adventure",
              "developer": "Nintendo",
              "release_date": "May 12, 2023"},\
             {"title": "Hollow Knight",
              "image_url": "https://npr.brightspotcdn.com/dims4/default/2ac3bf0/2147483647/strip/true/crop/616x353+0+0/resize/880x504!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F5e%2F18%2F3075f4a34ace9caaac2f434c2b03%2Fhollow-knight-wide-cover.jpeg",
              "description": "Explore twisting caverns, ancient cities and deadly wastes; battle tainted creatures and befriend bizarre bugs; and solve ancient mysteries at the kingdom's heart.",
              "genre": "Metroidvania",
              "developer": "Team Cherry",
              "release_date": "February 24, 2017"},\
             {"title": "Cuphead",
              "image_url": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000016330/d94d2186ef03c930392253c83c84af0c73b7e57cd902a526b09b4155a25930fe",
              "description": "The game follows Cuphead, a small, anthropomorphic cup who, in a deal with the Devil after losing a game at the Devil's casino, is sent on a quest to repossess the souls of runaway debtors as payment for Cuphead's loss.",
              "genre": "Run and Gun",
              "developer": "Studio MDHR",
              "release_date": "September 29, 2017"},\
             {"title": "The Last Of Us",
              "image_url": "https://i0.wp.com/www.the-pixels.com/wp-content/uploads/2017/06/the-last-of-us1sm.jpg?fit=1005%2C719&ssl=1",
              "description": "In a hostile, post-pandemic world, Joel and Ellie, brought together by desperate circumstances, must rely on each other to survive a brutal journey across what remains of the United States.",
              "genre": "Action-Adventure",
              "developer": "Naughty Dog",
              "release_date": "June 14, 2013"}

friendship_statuses = ["Pending", "Accepted", "Rejected"]

def seed_users():
    print("Seeding Users...")
    User.query.delete()
    users = []
    for user_dict in users_list:
        user = User(
            username   = user_dict["username"],
            avatar_url = user_dict["avatar_url"]
        )
        user.password_hash = user_dict["password"]
        users.append(user)
    db.session.add_all(users)
    db.session.commit()

def seed_games():
    print("Seeding Games...")
    Game.query.delete()
    games = []
    for game_dict in games_list:
        game = Game(
            title = game_dict["title"],
            image_url = game_dict["image_url"],
            description = game_dict["description"],
            genre = game_dict["genre"],
            developer = game_dict["developer"],
            release_date = game_dict["release_date"]
        )
        games.append(game)
    db.session.add_all(games)
    db.session.commit()

def seed_libraries():
    print("Seeding Libraries...")
    Library.query.delete()
    users = User.query.with_entities(User.id).all()
    games = Game.query.with_entities(Game.id).all()
    libraries = []
    for i in range(20):
        library = Library(
            user_id = rc(users)[0],
            game_id = rc(games)[0]
        )
        libraries.append(library)
    db.session.add_all(libraries)
    db.session.commit()

def seed_reviews():
    print("Seeding Reviews...")
    Review.query.delete()
    users = User.query.with_entities(User.id).all()
    games = Game.query.with_entities(Game.id).all()
    reviews = []
    for i in range(20):
        review = Review(
            rating      = randint(1,10),
            title       = fake.unique.text(max_nb_chars=20),
            description = fake.unique.text(max_nb_chars=20),
            user_id     = rc(users)[0],
            game_id     = rc(games)[0]
        )
        reviews.append(review)
    db.session.add_all(reviews)
    db.session.commit()

def seed_friends():
    print("Seeding Friends...")
    Friend.query.delete()
    users = User.query.with_entities(User.id).all()
    friends = []
    for i in range(20):
        friend = Friend(
            friendship_status = rc(friendship_statuses),
            user1_id = rc(users)[0],
            user2_id = rc(users)[0]
        )
        friends.append(friend)
    db.session.add_all(friends)
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        seed_users()
        seed_games()
        seed_reviews()
        seed_libraries()
        seed_friends()
        print("Seeding Complete!")
