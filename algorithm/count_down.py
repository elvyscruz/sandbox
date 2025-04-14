
def count_down(i):
    if i == 0:
        return [i]
    return [i] + count_down(i - 1) 


print(count_down(5))
