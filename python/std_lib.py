# generate random integer between 1 and 10
import random
random_number = random.randint(1,10)
print(random_number)

# get current date and time
import datetime 
current_time = datetime.datetime.now()
print(current_time)

# os module 
import os

current_dir = os.getcwd()
print(current_dir)

# json module
import json
person = '{"name": "alice", "age": 30}'

person_dict = json.loads(person)
print(person_dict['name'])

# math module
import math 
result = math.sqrt(25)
print(result)

# regular expressions
import re
text = "Hello, world. This is python"
pattern = r'python'
match = re.search(pattern,text)
if match:
  print('Pattern found')


# others
# csv
# collections
# itertools
# sys
# time and datetime 
# socket
# theading and multiprocesing
# picle and cPickle
# subprocess
# argparse
# logging
# sqlite3
# http and http.server
# email
# gizip and zipfile
# hashlib
# platform
# uuid
# tempfile
# calendar
# asyncio
# pathlib