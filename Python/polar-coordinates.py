#Task :You are given a complex z. Your task is to convert it to polar coordinates

# Enter your code here. Read input from STDIN. Print output to STDOUT
from cmath import sqrt, phase
c = complex(input())
print (sqrt(pow(c.real,2)+pow(c.imag,2)).real)
print (phase(complex(c.real,c.imag)))
