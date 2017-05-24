"""comments"""
def print_list (test):
    """test"""
    for a in test:
        if isinstance(a, list):
            print_list(a)
        else:
            print(a)

