# import entire module
import math

# importing with an alias
import datetime as dt

# importing specific items
from random import randint
print(randint(1,10))

# importing everyting (not recommened)
from os import *
currdir = getcwd()
print(currdir)

# access functions, classes and variables
# using dot notation

print(math.pi)

# importing 3rd party libs or modules

# use a package manager (pip)
## pimp install requests

import requests
response  = requests.get('https://xeted.com')
print(response.status_code)

# pyenv is used for python version management

# view system path for pip packages
import sys 
print(sys.path)

#########
# python packages is a way to structure and reuse python modules
#########

# the structure is a directory with python modules an a __init__.py file
# __init__.py can be empty or contain initialization code for the package

# modules are python files containing functions, classes or variables
# modules can be organized into subdirectories in a hierarchical structure

# you can import modules using `import` statement

# packages provide a way to manage namespaces
# eg. 
# import my_package.my_module
# form my_packe import my_module

# python packages can be distributed and installs with setuptools,
# using setup.py file to define metadata and dependencies


# example:
#  my_package/
#     __init__.py
#     module1.py
#     module2.py
#     subpackage/
#         __init__.py
#         submodule1.py
#         submodule2.py




