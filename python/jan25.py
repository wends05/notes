class Person:
    def __init__(self, name, likes, hates):
        self.name = name
        self.likes = likes
        self.hates = hates

    def taste(self, food):
        return f"{self.name} eats the {food}{' and loves it' if food in self.likes else ' and hates it' if food in self.hates else ''}!"


p1 = Person("Wendell", ["Patatas"], ["Uga"])

print(p1.taste("Patatas"))
print(p1.taste("Uga"))
print(p1.taste("Pasta"))
