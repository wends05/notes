import os
import json

def setUp():
    global grades
    grades = {}
    
    if os.path.isfile('mygrades.json'):
        with open("mygrades.json", "r") as f:
            grades = json.load(f)
    else:
        with open("mygrades.json", "w") as f:
            json.dump({ }, f, indent = 4)
    
    global listgrades
    listgrades = list(grades.keys())


def updateGradesDatabase():
    with open("mygrades.json", "w") as f:
        json.dump(grades, f, indent=4)
    setUp()


def listGrades():
    for number, (subject, stats) in enumerate(grades.items(), 1):
        print(f"{number}: {subject}: {stats['grade']} ({stats['weight']})")


def selectGrade():
    while True:
        try:
            listGrades()
            subject = input("\nselect a number to change a grade\nPress q to exit\n")
            
            if "q" in subject.lower():
                print("Exited\n")
                break
            
            subject = int(subject) - 1
            changeGrade(subject)

            if 0 <= subject <= len(grades):
                break

        except ValueError:
            print("\nInput is not a number. Try again\n")
        except IndexError:
            print("\nOut of range, try again\n")
    

def changeGrade(what_grade: int):

    subject = listgrades[what_grade]

    print(f"{subject} {grades[subject]}")
    while True:
        try:
            grades[subject]["grade"] = float(input("What is your new grade?\n"))

            with open("mygrades.json", "w") as f:
                json.dump(grades, f, indent=4)

            yes = input("Do you want to change another grade? (y)\n")

            if "y" in yes.lower():
                selectGrade()

            break
        except TypeError:
            print("\nInput is not a number. Try again\n")


def addSubject():
    while True:
        try:
            name = input("What is the name of the subject that you want to add?\n")
            
            grade = float(input("What is the grade of the subject? If you still have no grade on this subject, type 0.\n"))
            weight = int(input("What is the weight of the subject?\n"))

            grades[name] = {"grade": grade, "weight": weight}

            print(f"{name} {grade} ({weight}) added")
            updateGradesDatabase()
            subject = input("Would you like to add another subject? (y)\n")
            if "y" in subject.lower():
                
                addSubject()
            break
        except ValueError:
            print("Input is not a number and you cannot quit. Please try again.\n")

def removeSubject():
    while True:
        try:
            listGrades()
            remove = input("Select a number to remove a subject. Press q to exit ")

            if "q" in remove.lower():
                print("Exited\n")
                break

            remove = int(remove) - 1

            if 0 <= remove <= len(grades):
                
                print(f"{listgrades[remove]} removed (Grade: {grades[listgrades[remove]]['grade']} {(grades[listgrades[remove]]['weight'])})")

                del grades[listgrades[remove]]
                updateGradesDatabase()
                break
        except IndexError:
            print("Subject not found, try again")
        except ValueError:
            print("Input is not a number. Try again")


def calculateGrade():

    total_grade = 0
    total_weight = 0

    for stats in grades.values():
        total_grade += stats['grade'] * stats['weight']
        total_weight += stats['weight']
    
    print("With these subjects, grades and their corresponding weights\n")
    listGrades()
    
    print("\nYour current grade is ", round(total_grade / total_weight, 2))


def main():

    setUp()

    print("\nWelcome to Grade Calculator.")
    print("\nHere are your current grades: ")

    listGrades()

    add = input("Would you like to add a subject? (y)\n")
    if "y" in add.lower():
        addSubject()
    
    change = input("Would you like to modify the subjects? (y)\n")
    if "y" in change.lower():
        selectGrade()
    
    remove = input("Would you like to remove a subject? (y)\n")
    if "y" in remove.lower():
        removeSubject()
    
    calculateGrade()

if __name__ == "__main__":
    main()
