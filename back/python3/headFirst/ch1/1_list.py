movies = ["hello", "hsaha", "asda"]
print("movies[1]", movies[1])
print("length", len(movies))

# append
movies.append("extra1")
print(movies)

# pop
print(movies.pop())

# extend
movies.extend(["extra2", "extra3"])
print(movies)

# remove
movies.remove("extra3")
print(movies)

# insert
movies.insert(0, "first")
print("insert", movies)
