# jQuery environment-bar [![Build Status](https://secure.travis-ci.org/stage3systems/stage3systems.svg?branch=master)](https://travis-ci.org/stage3systems/stage3systems) ![Bower Version](https://badge.fury.io/bo/stage3systems.svg)

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

## Contributing

Check [CONTRIBUTING.md](https://github.com/stage3systems/environment-bar/blob/master/CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/stage3systems/environment-bar/releases) for detailed changelog.

## License

[MIT License](https://github.com/stage3systems/environment-bar/LICENSE.md)
