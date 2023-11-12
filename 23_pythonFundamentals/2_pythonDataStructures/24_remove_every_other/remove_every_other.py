def remove_every_other(lst):
    """Return a new list of other item.

        >>> lst = [1, 2, 3, 4, 5]

        >>> remove_every_other(lst)
        [1, 3, 5]

    This should return a list, not mutate the original:

        >>> lst
        [1, 2, 3, 4, 5]
    """
    final_lst = []
    
    for idx in range(len(lst)):
        if idx % 2 == 0:
            final_lst.append(lst[idx])
            
    return final_lst
            