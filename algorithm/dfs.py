from collections import deque

search_queue = deque()

family = {}

family["elvys"] = ["daliette", "lia", "elisa"]
family["idalia"] = ["daliette", "lia", "elisa"]

family["guillermo"] = ["ely", "elvys", "guillermito",
                       "agueda", "katy", "danny", "denny"]
family["eulogio"] = ["jocabet","fluy","milagros","daniel"]

family["mireya"] = ["iran","noel","mariali"]
family["elsa"] = ["guillermo","estefany"]
family["nana"] = ["gina","roalkis","johendy","oronelys"]


family["benita"] = ["eulogio","mireya","elsa","nana","eddy","nelson","tiburcio","mariaelena"]
family["mariaelena"] = ["ely", "elvys", "guillermito"]
family["ely"] = ["elin", "elian", "wilito", "elisandra"]
family["guillermito"] = ["brianna", "camila"]
family["agueda"] = ["masiel", "abby"]
family["katy"] = ["hija1", "hija2"]


search_queue += family["benita"]


def es_abogado(name: str):
    return name.endswith("mito")


while search_queue:
    person = search_queue.popleft()
    print(f"current person is {person}")
    if es_abogado(person):
        print(f"{person} is abogado!")
        break
    else:
        if person in family and family[person]:
            search_queue += family[person]
