function flipArgs(func) {
    return function() {
        func(...Array.from(arguments).reverse());
    }
}