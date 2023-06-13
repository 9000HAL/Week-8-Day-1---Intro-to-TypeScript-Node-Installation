## DESCRIPTION:
## You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text 
## that should be displayed next to such an item.

## Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
## []                                -->  "no one likes this"
## ["Peter"]                         -->  "Peter likes this"
## ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
## ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
## Note: For 4 or more names, the number in "and 2 others" simply increases.


def like(alist):
    resp = len(alist)
    if resp <= 0:
        return "no one else likes this"
    else:
        if resp == 1:
            return f'{alist[0]} like this'
        elif resp ==2:
            return f'{alist[0]} and {alist[1]} like this.'
        elif resp == 3:
            return f'{alist[0]}, {alist[1]}, and {alist[2]} like this'
        elif resp >= 4:
            num = resp - 2

            return f'{alist[0]}, {alist[1]} , and {num} other like this'



print(like([]))


#TIME COMPLEXITY?

