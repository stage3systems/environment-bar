# jQuery environment-bar [![Bower version](https://badge.fury.io/bo/environment-bar.svg)](http://badge.fury.io/bo/environment-bar)

### Clear way to display which environment the product instance is

Make it painfully obvious when you are on the development, testing, or staging environment and which branch you're on.

Insert screenshot here.


## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.environmentbar.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("body").environmentBar({
		env: "test"
	});
	```

### Additional Options

You can add additional details to be displayed such as a version number or branch.

```detailsLabel: "Version"```: The label eg: Version, Branch
```detailsValue: "1.2"```: Value to display
```showDetails: true```: Show or hide details. Defaults to true

## Contributing

Check [CONTRIBUTING.md](https://github.com/stage3systems/environment-bar/blob/master/CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/stage3systems/environment-bar/releases) for detailed changelog.

## License

[MIT License](https://github.com/stage3systems/environment-bar/blob/master/LICENSE.txt)
