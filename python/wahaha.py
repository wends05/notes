import tkinter

win = tkinter.Tk()
win.title("Hello World")
win.geometry("800x500")

my_label = tkinter.Label(win, text="Hello World", font=("DejaVuSerif", 40), fg="blue")
my_label.pack()

win.mainloop()