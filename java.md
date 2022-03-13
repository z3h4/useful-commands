# Variables

## We can assign multiple variables in a single line

    first = last = node;

# Arrays

## Sort a 2D array

    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

## Sort an array of strings in descending orders after concatenation

    Arrays.sort(numbers, (a, b) -> (b + a).compareTo(a + b));

## Sort an array between indexes

    Arrays.sort(nums, i, j);

- `i` is inclusive, `j` is exclusive

## Convert a Linked List to a 2D integer (int[]) array

    list.toArray(new int[list.size()][])

## Convert an array to a list

    Arrays.asList(arr);

## Copying an array into another

    int[] arr = nums.clone();

## Fill all indexes of an array with default value

    Arrays.fill(numbers, Integer.MIN_VALUE);

# Characters

## ASCII character range

    A -> 65
    Z -> 90
    a -> 97
    z -> 122

## Things to remember

## Rotate an array k times

`k` can be greater than the size of the array. So, always so `k % n` so that we don't do repetitive tasks.

# Character

- Convert a character to lowercase

      Character.toLowerCase(s.charAt(i));

- Convert a character to a integer number

      ch - '0';
      Character.getNumericValue(ch);
      Integer.parseInt(String.valueOf(ch));

# Strings

## Length of a string between two index i and j

      j - i + 1;

## Convert a string to lowercase

      s.toLowerCase();

## Check for an empty string

    needle.isEmpty()

## If the key of a HashMap is String and we want to access the map using character, we have to convert that character to string

    map.get(String.valueOf(s.charAt(i)))

or

    map.get(s.substring(i, i + 1))

## Count # of occurrances of a particular character in a string

      s.chars().filter(ch -> ch == '.').count()

## Joining array of words to make sentence

    String.join(" ", words);    // " " is the delimiter

## Replace multiple spaces with a single space using regular expression

    s.replaceAll(" +", " ")

## Parse a String to a Number

    Integer.parseInt(s);

## Parsing a String to a hexadecimal number

    Integer.parseInt(s, 16);

## Check first character of a string is 0

    s.charAt(0) == '0';

## Split a string using . (dot)

- dot (.) is a special character in Java's regular expression to match any single character.
- If you want to split String on the dot you need to escape dot as `\\.`

      String[] words = s.split("\\.");

# List Interface

## Reverse a List type

    Collections.reverse(list);

# Queue

## Create a priority queue in reverse order

    PriorityQueue<Integer> min = new PriorityQueue<>(Collections.reverseOrder());
