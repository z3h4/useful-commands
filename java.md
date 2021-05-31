# Arrays

### Sort a 2D array

    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

### Sort an array of strings in descending orders after concatenation

    Arrays.sort(numbers, (a, b) -> (b + a).compareTo(a + b));

### Convert a Linked List to a 2D integer (int[]) array

    list.toArray(new int[list.size()][])

### Copying an array into another

    int[] arr = nums.clone();

### Fill all indexes of an array with default value

    Arrays.fill(numbers, Integer.MIN_VALUE);

# Characters

### ASCII character range

    A -> 65
    Z -> 90
    a -> 97
    z -> 122

## Things to remember

### Rotate an array k times

`k` can be greater than the size of the array. So, always so `k % n` so that we don't do repetitive tasks.

# Character

- Convert a character to lowercase

      Character.toLowerCase(s.charAt(i));

# Strings

### Convert a string to lowercase

      s.toLowerCase();

### Check for an empty string

    needle.isEmpty()

### If the key of a HashMap is String and we want to access the map using character, we have to convert that character to string

    map.get(String.valueOf(s.charAt(i)))

or

    map.get(s.substring(i, i + 1))

### Count # of occurrances of a particular character in a string

      s.chars().filter(ch -> ch == '.').count()
