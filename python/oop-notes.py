
# press Alt+Z to wrap characters
# classes :DDDDD

# print( type("I am a string"))
#  <class 'str'>

# ['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']

# print( dir(str) )

#  returns a list of methods and attributes for str

# print( dir(int) )

#  returns a list of methods and attributes for int
#  ['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__init_subclass__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'as_integer_ratio', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']

# Class:
# collection of data and the actions that can modify the data. Programming is a very abstract task. Classes were created to create a mental model of how to think about data in a more concrete way. Classes act as blueprints. They tell Python what data is collected and how it can be modified.
# Convention of naming a class:
#   use camel case, start with a capital letter

# Ex. Car

class Car:

    def __init__(self, wheels: int = 4, color: str = "blue", speed: int = 10):
        self.wheels = wheels
        self.color = color
        self.speed = speed

    def __repr__(self) -> str:
        return self


# Objects
# Objects are constructed according to the blueprint. "Instance" of a class.

# Instantiation / Instantiate
# The process where an object is created based on the blueprint (the class)
    
Honda = Car(4, "blue", 10)


class Actor:
    def __init__(
            self,
            first_name,
            last_name,
            total_films,
            birthday="January 1",
            oscar_nominations=0,
            oscar_wins=0,
    ) -> None:
        self.first_name = first_name
        self.last_name = last_name
        self.birthday = birthday
        self.total_films = total_films
        self.oscar_nominations = oscar_nominations
        self.oscar_wins = oscar_wins

    def __repr__(self) -> str:
        return self


dw = Actor("Denzel", "Washington", 10)

print(f"{dw.first_name} {dw.last_name} was born on {dw.birthday}")


## Edabit exercise

class Name:
    def __init__(self, fname: str, lname: str):
        self.fname = fname.title()
        self.lname = lname.title()
        self.fullname = f"{self.fname} {self.lname}"
        self.initials = f"{self.fname[0]}.{self.lname[0]}."

weh = Name("we", "he")

print(weh.fullname)
print(weh.initials)