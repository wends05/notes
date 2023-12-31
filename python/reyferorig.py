def li_gal():
 print('Liter to Gallon')
 print('')
 l = float(input("Enter a volume value for liter  : "))
 g = l/3.785
 print('The liquid volume in gallon is ',g)

def fah_kel():
 print('Fahrenheit to Kelvin')
 print('')
 f = float(input("Enter a value for fahrenheit : "))
 kelvin = (f-32) * 5/9 + 273.15
 print('The kelvin is ',kelvin)

def oz_g():
 print('Ounce to Grams')
 print('')
 o = float(input("Enter a value for ounce : "))
 grams = o * 28.35
 print('The grams is ', grams)

def t_lb():
 print('Ton to Pounds')
 print('')
 t = float(input("Enter a value for ton : "))
 pounds = t * 2000
 print('The pounds is ', pounds)

def mi_ft():
 print('Miles to Feet')
 print('')
 m = float(input("Enter a value for miles : "))
 ft = m * 5280
 print('The feet is ', ft)

def yd_m():
 print('Yards to Meters')
 print('')
 y = float(input("Enter a value for yards: "))
 m = y * 0.9
 print('The meteres is ', m)

def qt_pt():
 print('Quarts to Pints')
 print('')
 q = float(input("Enter a value for quarts: "))
 p = q * 2
 print('The pints is ', p)

def tbsp_tsp():
 print('Tablespoon to Teaspoon')
 print('')
 t = float(input("Enter a value for tablespoon: "))
 s = t * 3
 print('The teaspoon is ', s)

def in_cm():
 print('Inches to Centimeters')
 print('')
 i = float(input("Enter a value for inches: "))
 c = i * 2.54
 print('The centimeters is ', c)

def ft_cm():
 print('Feet to Centimeters')
 print('')
 f = float(input("Enter a value for feet: "))
 c = f * 30.48
 print('The centimeters is ', c)

def min_sec():
 print('Minutes to Seconds')
 print('')
 m = float(input("Enter a value for minutes: "))
 s = m * 60
 print('The seconds is ', s)

def d_hrs():
 print('Days to Hours')
 print('')
 d = float(input("Enter a value for days: "))
 hrs = d * 24
 print('The hours is ', hrs)

def c_m():
  print('Centimeters to Meters')
  print('')
  c = float(input("Enter a value for centimeters: "))
  m = c * 0.01
  print('The meters is ', m)

def pt_c():
   print('Pint to Cups')
   print('')
   p = float(input("Enter a value for pint: "))
   c = p * 2
   print('The cups is ', c)

def gal_qt():
    print('Gallon to Quarts')
    print('')
    g = float(input("Enter a value for gallon: "))
    qt = g * 4
    print('The quarts is ', qt)



def print_menu():
# Unit Conversion Menu
 print('1 - Liter to Gallon')
 print('2 - Fahrenheit to kelvin')
 print('3 - Ounce to Grams')
 print('4 - Ton to Pounds')
 print('5 - Miles to Feet')
 print('6 - Yards to Meters')
 print('7 - Quarts to Pints')
 print('8 - Tablespoon to Teaspoon')
 print('9 - Inches to Centimeters')
 print('10 - Feet to Centimeters')
 print('11 - Minutes to Seconds')
 print('12 - Days to Hours')
 print('13 - Centimeters to Meters')
 print('14 - Pint to Cups')
 print('15 - Gallon to Quarts')
 print('0 - Exit')
 print('')
 choice = input('Which conversion would you like to do? : ')
 if choice == '1':
    li_gal()
 elif choice == '2':
    fah_kel()
 elif choice == '3':
    oz_g()
 elif choice == '4':
    t_lb()
 elif choice == '5':
    mi_ft()
 elif choice == '6':
    yd_m()
 elif choice == '7':
    qt_pt()
 elif choice == '8':
    tbsp_tsp()
 elif choice == '9':
    in_cm()
 elif choice == '10':
    ft_cm()
 elif choice == '11':
    min_s()
 elif choice == '12':
    d_hrs()
 elif choice == '13':
    c_m()
 elif choice == '14':
    pt_c()
 elif choice == '15':
    gal_qt()
    # any key not in choices ends the program
    print('OK. Bye bye. 🙂')


# start the program by displaying menu
print_menu()