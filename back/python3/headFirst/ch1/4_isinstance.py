movies = ["asdas", "ffff",
          ["asd", "sdfksd",
           ["safdf", "eeee"]],
          "fgfdgd"]
print(movies)
for each_item in movies:
    if isinstance(each_item, list):
        for item2 in each_item:
            print(item2)
    else:
        print(each_item)




