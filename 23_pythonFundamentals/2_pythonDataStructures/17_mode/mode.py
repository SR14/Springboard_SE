def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    
    count_dict = {}
    
    for n in nums:
        if n in count_dict.keys():
            count_dict[n] += 1
        else:
            count_dict[n] = 1
            
    max_count = 0
    mode = None
    
    for n in count_dict:
        if count_dict[n] > max_count:
            max_count = count_dict[n]
            mode = n
            
    return mode
