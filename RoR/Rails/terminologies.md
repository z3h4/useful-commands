# Difference between `float` and `decimal`

- Use `float` when you don't care about precision too much. For example, some scientific simulations and calculations only need up to 3 or 4 significant digits. This is useful in trading off accuracy for speed. Since they don't need precision as much as speed, they would use `float`.

- Use `decimal` if you are dealing with numbers that need to be precise and sum up to correct number (like compounding interests and money-related things). Remember: if you need precision, then you should always use `decimal`.
