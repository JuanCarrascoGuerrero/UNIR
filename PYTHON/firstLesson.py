"""
Comentario en bloque: Primeros
pasos con PYTHON
"""

print("Hola mundo")



# Sintaxis básica

print("----------variables--------------")
variable = 1
print(variable)
print(type(variable))

variable = "Uno"
print(type(variable))

variable = None
print(type(variable))

variable = 1.2
print(type(variable))


#Constantes
"""
No existe reserva de constantes,
práctica común poner en MAYUSCULAS
"""
print("----------constantes--------------")

IVA = 0.21
PI = 3.141516

precio = 25
precio_final = precio + (precio * IVA)
print(precio_final)


"""
Normalmente se guardan en una clase aparte
"""

import constantes

precio_final_reducido = precio + (precio * constantes.IVAreducido)
print(precio_final_reducido)


# Operaciones básicas
from decimal import Decimal
print("----------operaciones--------------")
suma = 5+1
resta = 2-2.3                       #Atento! Los decimales "a pelo" los considera binarios, tratandolos con imprecision
restadecimal = 2 - Decimal('2.3')   #Hay que añadir librería para precisar
multiplicacion = 1*15j              #tambien numeros complejos
division = 2/6
division_entera = 2//6              #división entera, solo devuelve parte entera
modulo = 7 % 6
exponente = 2 ** 2

print(suma,resta,restadecimal,multiplicacion,division,division_entera,modulo,exponente)

# operacion<>asignacion    simultánea   operadores=
n = 1
n += 1
print(n)
n *= 2
print(n)
n **= 4
print(n)
n //= 3
print(n)


# Condicionales
# Es necesario la identacion/sangria para que funcione

print("----------condicionales--------------")

print(variable)

if(variable ==1):
    print ("Es uno")

if(variable <1):
    print ("Es menor uno")

if(variable >1):
    print ("Es mayor uno")

if(variable <=1):
    print ("Es menor igual uno")

if(variable >=1):
    print ("Es mayor igual uno")

if(variable ==Decimal(1.0)):
    print ("Es igual decimal uno")

if(variable !=Decimal(1.0)):
    print ("No es uno")

# Booleanos

print("----------booleanos--------------")

print(True & False)
print(True | False)
print(not (True & False))

# Texto

print("----------String--------------")

mensaje = "Bienvenido a python"
print(mensaje)
# len -> length de la cadena
print(len(mensaje))
# find -> indice de comienzo del elemento
print(mensaje.find("d"))
print(mensaje.find("Bienvenido"), mensaje.find("python"))
# upper y lower
print(mensaje.upper(), mensaje.lower())
# replace 
print(mensaje.replace("a",""))

onceavo_car = mensaje[8]
ocho_car = mensaje[0:8]
ocho2_car = mensaje[:8]
ochofin_car = mensaje[8:]

print(onceavo_car, ocho_car, ocho2_car, ochofin_car, onceavo_car*8)


# Conversiones

print("----------Conversiones--------------")

valor = 10

valortexto = str(valor)
valorfloat = float(valor)

print(valortexto, valorfloat)

texto = "5"

textoint = int(texto)
complex_texto = complex(textoint)

print(textoint, complex_texto)

boleano = bool()
boleanotexto = bool("Hola")
boleanocero = bool(0)
boleanotexto = bool(5j)

boleanotexto = bool("Hola")
print(boleano, boleanotexto, boleanocero, boleanotexto)