import tkinter
from tkinter import *

# Press Alt+Z para mag wrap ang text

# nag gamit ako sang import tkiner from tkinter import * para indi na ako sagay gamit sang tkiner.Label(chuchu) chuchu diretso sulat Label(win chuchu here)
# Class definition

class Post:
    def __init__(self, username, user_id, media, avatar, comment_button, caption, likes, comments, like_button):
        self.username = username
        self.user_id = user_id
        self.media = media
        self.avatar = avatar
        self.comment_button = comment_button
        self.caption = caption
        self.likes = likes
        self.comments = comments
        self.like_button = like_button


username = "hkjr-19"
user_id = 112010
media = "./img/photogram/waterfall.png"
avatar = "./img/photogram/avatar_icon.png"
comment_button = "./img/photogram/add_comment.png"
caption = "First time sa Earth. Baliktaron ko na guro flow sang waterfall nila diri."
likes = 23
comments = ["Beautiful!", "I wish I was there too.", "Is that Nevada Falls?",
            "Love it!", "Can't wait for the Halfdome pictures", "More pics please"]
like_button = "img/photogram/likes_icon.png"

post1 = Post(username, user_id, media, avatar, comment_button,
             caption, likes, comments, like_button)

# Tkinter code

win = Tk()

# Window Configurations

win.title("Photogram")
win.geometry("800x500")
win.configure(background="white")
win.grid_columnconfigure(1, weight=0)
win.grid_columnconfigure(2, weight=1)


# Getting images and turning it to tkinter PhotoImages

media = PhotoImage(file=post1.media)
comment_button = PhotoImage(file=post1.comment_button)
avatar = PhotoImage(file=post1.avatar)
like_button = PhotoImage(file=post1.like_button)
avatar = PhotoImage(file=post1.avatar)


# designing Labels

media_label = Label(
    win,
    image=media,
    bg="white"
)
comment_button_label = Label(
    win,
    image=comment_button,
    justify="center",
    bg="white"
)
avatar_label = Label(
    win,
    image=avatar,
    bg="white"
)

like_button_label = Label(
    win,
    image=like_button,
    justify="center",
    bg="white"
)

like_count = Label(
    win,
    font="DejaVuSans 14",
    text=post1.likes,
    bg="white",
    justify="left"
)

user_name = tkinter.Label(
    win,
    text=post1.username,
    font="DejaVuSans 14 bold",
    justify="left",
    bg="white"
)
caption = Label(
    win,
    text=post1.caption,
    font="DejaVuSans 14",
    wraplength=300,
    justify="center",
    bg="white"
)
user_avatar = Label(
    win,
    image=avatar,
    width=30,
    bg="white"
)

# comments kay since array siya, gin combine nalang ni sir ang pag define sang kada commend kag grid.

for comment in post1.comments:
    Label(
        win,
        text=comment,
        font="DejaVuSans 14",
        wraplength=300,
        justify="left",
        bg="white"
    ).grid(
        row=post1.comments.index(comment) + 3,
        column= 1,
        columnspan=5,
        sticky="nw"
    )


# "styling" the Labels to a grid view in the window

media_label.grid(
    row=0,
    column=0,
    rowspan=10,
    sticky="w"
)
comment_button_label.grid(
    row=2,
    column=1,
    columnspan=2,
)

avatar_label.grid(
    row=0,
    column=1,
    sticky="w"
)

like_button_label.grid(
    row=9,
    column=1,
    sticky="w"
)

like_count.grid(
    row=9,
    column=2,
    sticky="w",
    columnspan=2
)

user_name.grid(
    row=0,
    column=2,
    sticky="w"
)

caption.grid(
    row=1,
    column=1,
    columnspan=2,
    sticky="nw"
)

win.mainloop()
