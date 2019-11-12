---
layout: post
title: "Kotlin Extension Functions"
date: 2019-11-11
---

Kotlin extension functions and properties are similar to member functions/properties, but defined outside of any class.  They let you extend the functionality of a class without having to derive a new class, or use any kind of design pattern. 
This functionality is helpful when you want to modify classes that you don’t have access to, such as built-in or third-party classes. 

For example, take the following Android `toast` function: 
```kotlin
private fun toast(message: String) {
	Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
}
```

In order to create a extension function so that Context can use this function. Create a new file called `Extensions.kt` and add the following: 
```kotlin
fun Context.toast(message: String) {
    Toast.makeText(this, message, Toast.LENGTH_LONG).show()
}
```
Here we have created an extension function by prefixing the new function with the receiver type, in this case Android’s `Context` class. 

Now we are able to call `toast` from any class that extends from Context, such as an Activity or Fragment in Android: 
```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        toast("Extension functions are awesome!")
    }
}
```

If we want to add default values for the extension’s parameters, we can specify them in the constructor: 
```kotlin
fun Context.toast(message: String, length: Int = Toast.LENGTH_SHORT) {
    Toast.makeText(this, message, length).show()
}
```

And use the extension with a default value, or with a different one: 
```kotlin
 toast("Extension functions are awesome!")
 toast("Extension functions are awesome!", Toast.LENGTH_LONG)
```

Just like extension functions, Kotlin also support extension properties:
```kotlin
val <T> List<T>.lastIndex: Int
    get() = size - 1
```

It’s important to note that extension functions only have access to public properties and functions of the class they are extending.  Extension functions do not modify the classes or instances they are extending, but rather make these new functions callable via dot-notation, therefore making their integratiio with existing classes and objects appear seamless. 

Don’t abuse the power of extension functions though. As you can see from the examples above, it would be very easy to implement a wide array of abstractions that could make your code a lot harder to understand and mantain.  Kotlin functions are super cool, but only when traditional object oriented methods won’t cut it.  

To learn more, see Kotlin’s official documentation on Extensions [Extensions - Kotlin Programming Language](https://kotlinlang.org/docs/reference/extensions.html)
