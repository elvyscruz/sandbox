

def max(list):
    if list == []:
        return
    elif len(list) == 1:
        return list[0]
    else:
        return list[0] if list[0] > max(list[1:]) else max(list[1:])

print(max([5,7,3,4]))
