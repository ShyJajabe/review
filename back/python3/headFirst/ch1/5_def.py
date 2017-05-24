movies = ["asdas", "ffff",
          ["asd", "sdfksd",
           ["safdf", "eeee"]],
          "fgfdgd"]

def print_list (test):
    for a in test:
        if isinstance(a, list):
            print_list(a)
        else:
            print(a)

print_list(movies)
