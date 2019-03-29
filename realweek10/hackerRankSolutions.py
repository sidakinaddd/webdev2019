"""task1?"""
string="Hello, World!"
print(string)

"""task2"""
n = int(raw_input())
if n%2==1:
    print("Weird")
if n%2==0 and n>=2 and n<=5:
    print("Not Weird")
if n%2==0 and n>=6 and n<=20:
    print("Weird")
if n%2==0 and n>20 :
    print("Not Weird")

"""task3"""
if __name__ == '__main__':
    a = int(raw_input())
    b = int(raw_input())

    print(a+b)
    if a>=b:
        print(a-b)
    else:
        print(b-a)

    print(a*b)

 """task4"""
from __future__ import division

if __name__ == '__main__':
    a = int(raw_input())
    b = int(raw_input())

print(a//b)
print(a/b)

"""task5"""
if __name__ == '__main__':
    n = int(raw_input())

i=0
while i<n:
    print(i*i)
    i=i+1

"""task6"""

def is_leap(year):
    leap=False

    if year%4==0 and year%100!=0 or year%400==0:
        leap=True
    else:
        leap=False
    
    return leap
    
year = int(raw_input())
print is_leap(year)

"""task 8"""
from __future__ import print_function

if __name__ == '__main__':
    n = int(raw_input())
    for number in range(1,n+1):
        print(number,end="")

"""task 9"""
if __name__ == '__main__':
    n = int(raw_input())
    arr = list(set(map(int, raw_input().split())))
    arr.sort();
    print(arr[-2]);

"""task 10"""
N = int(raw_input())
record = {}
for i in range(0,N):
    student_info = raw_input()
    name = student_info.split()
    record[name[0]] = [float(name[1]),float(name[2]),float(name[3])]
    
find_name = raw_input()
if record.has_key(find_name):
    print "{0:.2f}".format(sum(record[find_name])/3.0)

""" task 11"""
def print_full_name(a, b):
    print "Hello "+a+" "+b+"! You just delved into python."

if __name__ == '__main__':
    first_name = raw_input()
    last_name = raw_input()
    print_full_name(first_name, last_name)
    

"""task 12"""
def mutate_string(string, position, character):
    l=list(string)
    l[position]=character

    return ''.join(l)

if __name__ == '__main__':
    s = raw_input()
    i, c = raw_input().split()
    s_new = mutate_string(s, int(i), c)
    print s_new

"""task 13"""
def count_substring(string, sub_string):
    c=0;
    for i in range(len(string)):
        if string[i:].startswith(sub_string):
            c=c+1
    return c

if __name__ == '__main__':
    string = raw_input().strip()
    sub_string = raw_input().strip()
    
    count = count_substring(string, sub_string)
    print count

"""task 14"""
s = raw_input()
print any(c.isalnum() for c in s)
print any(c.isalpha() for c in s)
print any(c.isdigit() for c in s)
print any(c.islower() for c in s)
print any(c.isupper() for c in s)

"""task 15"""


