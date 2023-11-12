def sum_up_diagonals(matrix):
    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """
    
    diag1 = 0
    diag2 = 0
    
    # get TL to BR diagonal sum (diag1)
    for idx in range(len(matrix)):
        diag1 += matrix[idx][idx]
        
    # get BL to TR diagonal sum (diag2)
    # define reversed index list for rows
    row_idx = list(reversed(range(len(matrix))))
    for idx in range(len(matrix)):
        row = row_idx[idx]
        
        diag2 += matrix[row][idx]
            
    return diag1 + diag2