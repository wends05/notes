conversions: dict = {
    1: {
        "from": "liter",
        "to": "gallon",
        "formula": "x / 3.785"
    },
    2: {
        "from": "fahrenheit",
        "to": "kelvin",
        "formula": "(x-32) * 5/9 + 273.15"
    },
    3: {
        "from": "ounce",
        "to": "grams",
        "formula": "x * 28.35"
    },
    4: {
        "from": "ton",
        "to": "pounds",
        "formula": "x * 2000"
    },
    5: {
        "from": "miles",
        "to": "feet",
        "formula": "x * 5280"
    },
    6: {
        "from": "yards",
        "to": "meters",
        "formula": "x * 0.9"
    },
    7: {
        "from": "quarts",
        "to": "pints",
        "formula": "x * 2"
    },
    8: {
        "from": "tablespoon",
        "to": "teaspoon",
        "formula": "x * 3"
    },
    9: {
        "from": "inches",
        "to": "centimeters",
        "formula": "x * 2.54"
    },
    10: {
        "from": "feet",
        "to": "centimeters",
        "formula": "x * 30.48"
    },
    11: {
        "from": "minutes",
        "to": "seconds",
        "formula": "x * 60"
    },
    12: {
        "from": "days",
        "to": "hours",
        "formula": "x * 24"
    },
    13: {
        "from": "centimeters",
        "to": "meters",
        "formula": "x * 0.01"
    },
    14: {
        "from": "pint",
        "to": "cups",
        "formula": "x * 2"
    },
    15: {
        "from": "gallon",
        "to": "quarts",
        "formula": "x * 4"
    }
}


def convert_measurement(choice: int):
    From = conversions[choice]["from"]
    to = conversions[choice]["to"]

    print(f"{From} to {to}\n")
    from_convert = float(input(f"Please input a value for {From}:"))

    to_convert = eval(conversions[choice]['formula'], {'x': from_convert})

    rounded_value = round(to_convert, 2)

    print(f'The converted value from {from_convert} {From} is {rounded_value} {to}')


def print_menu():
    for k, v in conversions.items():
        print(f"{k} - {v['from']} to {v['to']}")

    choice = int(input("Please choose a number for conversion: "))
    convert_measurement(choice) if choice in conversions.keys() else print("OK. Bye bye. 🙂")


if __name__ == "__main__":
    print_menu()
