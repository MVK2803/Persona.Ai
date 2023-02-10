a=['', '', 'Name: Rohan Gupta', 'Age: 32', 'Gender: Male', 'Occupation: Software Engineer', 'Country: India', "Education: Master's degree in Computer Science"]
a=a[2:]
#print(a)
Dict = dict((x,y)
             for x, y in (element.split(':')
             for element in a))
print(Dict["Age"])