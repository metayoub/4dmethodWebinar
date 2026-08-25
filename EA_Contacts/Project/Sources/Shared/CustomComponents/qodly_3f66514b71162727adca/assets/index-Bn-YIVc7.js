import { a as __mf_28, u as __mf_41, q as __mf_40, t as __mf_38, v as __mf_29$1 } from './qodly_3f66514b71162727adca__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.js-CWms37u8.js';
import { R as R$2, j as __mf_10, _ as __mf_26, e as __mf_25, c as __mf_17, b as __mf_20, f as __mf_18, a as __mf_23, h as __mf_9, k as __mf_22 } from './qodly_3f66514b71162727adca__loadShare__react__loadShare__.js-xqf2XqU7.js';
import { _ as __mf_29, a as __mf_31, b as __mf_1, c as __mf_6 } from './qodly_3f66514b71162727adca__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.js-BweE8nCT.js';
import { r as require$$1 } from './qodly_3f66514b71162727adca__loadShare__react__loadShare__.js_commonjs-proxy-CQCMyYyT.js';

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof (value, search, position) {
	return value.indexOf(search, position)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter (array, pattern) {
	return array.filter(function (value) { return !match(value, pattern) })
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]});

	append(root, root.siblings);
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f', abs(index ? points[index - 1] : 0)) != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
						if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters) && substr(characters, -1, void 0) !== ' ') characters += ' ';
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length || (variable === 0 && previous === 47)))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else {
								switch (atrule) {
									// c(ontainer)
									case 99:
										if (charat(characters, 3) === 110) break
									// l(ayer)
									case 108:
										if (charat(characters, 2) === 97) break
									default:
										offset = 0;
									// d(ocument) m(edia) s(upports)
									case 100: case 109: case 115:
								}
								if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
								else parse(characters, reference, reference, reference, [''], children, 0, points, children);
							}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings)
}

/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch (hash(value, length)) {
		// color-adjust
		case 5103:
			return WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
		case 6391: case 5879: case 5623: case 6135: case 4599:
			return WEBKIT + value + value
		// mask-composite
		case 4855:
			return WEBKIT + value.replace('add', 'source-over').replace('substract', 'source-out').replace('intersect', 'source-in').replace('exclude', 'xor') + value
		// tab-size
		case 4789:
			return MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return WEBKIT + value + MOZ + value + MS + value + value
		// writing-mode
		case 5936:
			switch (charat(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return WEBKIT + value + MS + value + value
		// order
		case 6165:
			return WEBKIT + value + MS + 'flex-' + value + value
		// align-items
		case 5187:
			return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/g, '') + (!match(value, /flex-|baseline/) ? MS + 'grid-row-' + replace(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value
		// cursor
		case 6187:
			return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /space-between/, 'justify') + WEBKIT + value + value
		// justify-self
		case 4200:
			if (!match(value, /flex-|baseline/)) return MS + 'grid-column-align' + substr(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return MS + replace(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, match(element.props, /grid-\w+-end/) })) {
				return ~indexof(value + (children = children[length].value), 'span', 0) ? value : (MS + replace(value, '-start', '') + value + MS + 'grid-row-span:' + (~indexof(children, 'span', 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ';')
			}
			return MS + replace(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return match(element.props, /grid-\w+-start/) })) ? value : MS + replace(replace(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if (strlen(value) - 1 - length > 6)
				switch (charat(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if (charat(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~indexof(value, 'stretch', 0) ? prefix(replace(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (MS + a + ':' + b + f) + (c ? (MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if (charat(value, length + 6) === 121)
				return replace(value, ':', ':' + WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return replace(value, ':', ':' + MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return replace(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case NAMESPACE: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: if (!strlen(element.value = element.props.join(','))) return ''
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case DECLARATION: element.return = prefix(element.value, element.length, children);
					return
				case KEYFRAMES:
					return serialize([copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
				case RULESET:
					if (element.length)
						return combine(children = element.props, function (value) {
							switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									lift(copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]}));
									lift(copy(element, {props: [value]}));
									assign(element, {props: filter(children, callback)});
									break
								// :placeholder
								case '::placeholder':
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}));
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}));
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]}));
									lift(copy(element, {props: [value]}));
									assign(element, {props: filter(children, callback)});
									break
							}

							return ''
						})
			}
}

var define_process_env_default = {};
var r, i;
const c = "undefined" != typeof process && void 0 !== define_process_env_default && (define_process_env_default.REACT_APP_SC_ATTR || define_process_env_default.SC_ATTR) || "data-styled", a = "active", l = "data-styled-version", u = "6.5.3", h = "/*!sc*/\n", d = "undefined" != typeof window && "undefined" != typeof document;
function p(e2) {
  if ("undefined" != typeof process && void 0 !== define_process_env_default) {
    const t2 = define_process_env_default[e2];
    if (void 0 !== t2 && "" !== t2) return "false" !== t2;
  }
}
const f = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : null !== (i = null !== (r = p("REACT_APP_SC_DISABLE_SPEEDY")) && void 0 !== r ? r : p("SC_DISABLE_SPEEDY")) && void 0 !== i ? i : "undefined" != typeof process && void 0 !== define_process_env_default && false), m = "sc-keyframes-";
function v(e2, ...t2) {
  return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e2} for more information.${t2.length > 0 ? ` Args: ${t2.join(", ")}` : ""}`) ;
}
let b = /* @__PURE__ */ new Map(), w$1 = /* @__PURE__ */ new Map(), N$1 = 1;
const C$1 = (e2) => {
  if (b.has(e2)) return b.get(e2);
  for (; w$1.has(N$1); ) N$1++;
  const t2 = N$1++;
  return b.set(e2, t2), w$1.set(t2, e2), t2;
}, O$1 = (e2) => w$1.get(e2), E$1 = (e2, t2) => {
  N$1 = t2 + 1, b.set(e2, t2), w$1.set(t2, e2);
}, I$1 = Object.freeze([]), $$1 = Object.freeze({});
function R$1(e2, t2, n2 = $$1) {
  return e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
}
const j$1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, x = /(^-|-$)/g;
function T$1(e2) {
  return e2.replace(j$1, "-").replace(x, "");
}
const k$1 = /(a)(d)/gi, D$1 = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
function V$1(e2) {
  let t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0) n2 = D$1(t2 % 52) + n2;
  return (D$1(t2 % 52) + n2).replace(k$1, "$1-$2");
}
const M$1 = 5381, G$1 = (e2, t2) => {
  let n2 = t2.length;
  for (; n2; ) e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
}, F$1 = (e2) => G$1(M$1, e2);
function z$1(e2) {
  return V$1(F$1(e2) >>> 0);
}
function W$1(e2) {
  return e2.displayName || e2.name || "Component";
}
function L$1(e2) {
  return "string" == typeof e2 && true;
}
function B$1(e2) {
  return L$1(e2) ? `styled.${e2}` : `Styled(${W$1(e2)})`;
}
const q$1 = Symbol.for("react.memo"), H$1 = Symbol.for("react.forward_ref"), Y$1 = { contextType: true, defaultProps: true, displayName: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, propTypes: true, type: true }, U$1 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, J$1 = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, X$1 = { [H$1]: { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, [q$1]: J$1 };
function K$1(e2) {
  return ("type" in (t2 = e2) && t2.type.$$typeof) === q$1 ? J$1 : "$$typeof" in e2 ? X$1[e2.$$typeof] : Y$1;
  var t2;
}
const Q$1 = Object.defineProperty, Z$1 = Object.getOwnPropertyNames, ee$1 = Object.getOwnPropertySymbols, te$1 = Object.getOwnPropertyDescriptor, ne$1 = Object.getPrototypeOf, oe = Object.prototype;
function se(e2, t2, n2) {
  if ("string" != typeof t2) {
    const o2 = ne$1(t2);
    o2 && o2 !== oe && se(e2, o2, n2);
    const s2 = Z$1(t2).concat(ee$1(t2)), r2 = K$1(e2), i2 = K$1(t2);
    for (let o3 = 0; o3 < s2.length; ++o3) {
      const c2 = s2[o3];
      if (!(c2 in U$1 || n2 && n2[c2] || i2 && c2 in i2 || r2 && c2 in r2)) {
        const n3 = te$1(t2, c2);
        try {
          Q$1(e2, c2, n3);
        } catch (e3) {
        }
      }
    }
  }
  return e2;
}
function re(e2) {
  return "function" == typeof e2;
}
const ie = Symbol.for("react.forward_ref");
function ce(e2) {
  return null != e2 && ("object" == typeof e2 || "function" == typeof e2) && e2.$$typeof === ie && "styledComponentId" in e2;
}
function ae(e2, t2) {
  return e2 && t2 ? e2 + " " + t2 : e2 || t2 || "";
}
function le(e2, t2) {
  return e2.join("");
}
function ue(e2) {
  return null !== e2 && "object" == typeof e2 && e2.constructor.name === Object.name && !("props" in e2 && e2.$$typeof);
}
function he(e2, t2, n2 = false) {
  if (!n2 && !ue(e2) && !Array.isArray(e2)) return t2;
  if (Array.isArray(t2)) for (let n3 = 0; n3 < t2.length; n3++) e2[n3] = he(e2[n3], t2[n3]);
  else if (ue(t2)) for (const n3 in t2) e2[n3] = he(e2[n3], t2[n3]);
  return e2;
}
function de(e2, t2) {
  Object.defineProperty(e2, "toString", { value: t2 });
}
const pe = class {
  constructor(e2) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(e2) {
    if (e2 === this._cGroup) return this._cIndex;
    let t2 = this._cIndex;
    if (e2 > this._cGroup) for (let n2 = this._cGroup; n2 < e2; n2++) t2 += this.groupSizes[n2];
    else for (let n2 = this._cGroup - 1; n2 >= e2; n2--) t2 -= this.groupSizes[n2];
    return this._cGroup = e2, this._cIndex = t2, t2;
  }
  insertRules(e2, t2) {
    if (e2 >= this.groupSizes.length) {
      const t3 = this.groupSizes, n3 = t3.length;
      let o3 = n3;
      for (; e2 >= o3; ) if (o3 <<= 1, o3 < 0) throw v(16, `${e2}`);
      this.groupSizes = new Uint32Array(o3), this.groupSizes.set(t3), this.length = o3;
      for (let e3 = n3; e3 < o3; e3++) this.groupSizes[e3] = 0;
    }
    let n2 = this.indexOfGroup(e2 + 1), o2 = 0;
    for (let s2 = 0, r2 = t2.length; s2 < r2; s2++) this.tag.insertRule(n2, t2[s2]) && (this.groupSizes[e2]++, n2++, o2++);
    o2 > 0 && this._cGroup > e2 && (this._cIndex += o2);
  }
  clearGroup(e2) {
    if (e2 < this.length) {
      const t2 = this.groupSizes[e2], n2 = this.indexOfGroup(e2), o2 = n2 + t2;
      this.groupSizes[e2] = 0;
      for (let e3 = n2; e3 < o2; e3++) this.tag.deleteRule(n2);
      t2 > 0 && this._cGroup > e2 && (this._cIndex -= t2);
    }
  }
  getGroup(e2) {
    let t2 = "";
    if (e2 >= this.length || 0 === this.groupSizes[e2]) return t2;
    const n2 = this.groupSizes[e2], o2 = this.indexOfGroup(e2), s2 = o2 + n2;
    for (let e3 = o2; e3 < s2; e3++) t2 += this.tag.getRule(e3) + h;
    return t2;
  }
}, fe = `style[${c}][${l}="${u}"]`, me = new RegExp(`^${c}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), ye = (e2) => "undefined" != typeof ShadowRoot && e2 instanceof ShadowRoot || "host" in e2 && 11 === e2.nodeType, ge = (e2) => {
  if (!e2) return document;
  if (ye(e2)) return e2;
  if ("getRootNode" in e2) {
    const t2 = e2.getRootNode();
    if (ye(t2)) return t2;
  }
  return document;
}, ve = (e2, t2, n2) => {
  const o2 = n2.split(",");
  let s2;
  for (let n3 = 0, r2 = o2.length; n3 < r2; n3++) (s2 = o2[n3]) && e2.registerName(t2, s2);
}, Se = (e2, t2) => {
  var n2;
  const o2 = (null !== (n2 = t2.textContent) && void 0 !== n2 ? n2 : "").split(h), s2 = [];
  for (let t3 = 0, n3 = o2.length; t3 < n3; t3++) {
    const n4 = o2[t3].trim();
    if (!n4) continue;
    const r2 = n4.match(me);
    if (r2) {
      const t4 = 0 | parseInt(r2[1], 10), n5 = r2[2];
      0 !== t4 && (E$1(n5, t4), ve(e2, n5, r2[3]), e2.getTag().insertRules(t4, s2)), s2.length = 0;
    } else s2.push(n4);
  }
}, be = (e2) => {
  const t2 = ge(e2.options.target).querySelectorAll(fe);
  for (let n2 = 0, o2 = t2.length; n2 < o2; n2++) {
    const o3 = t2[n2];
    o3 && o3.getAttribute(c) !== a && (Se(e2, o3), o3.parentNode && o3.parentNode.removeChild(o3));
  }
};
let we = false;
function Ne() {
  if (false !== we) return we;
  if ("undefined" != typeof document) {
    const e2 = document.head.querySelector('meta[property="csp-nonce"]');
    if (e2) return we = e2.nonce || e2.getAttribute("content") || void 0;
    const t2 = document.head.querySelector('meta[name="sc-nonce"]');
    if (t2) return we = t2.getAttribute("content") || void 0;
  }
  return we = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}
const Ce = (e2, t2) => {
  const n2 = document.head, o2 = e2 || n2, s2 = document.createElement("style"), r2 = ((e3) => {
    const t3 = Array.from(e3.querySelectorAll(`style[${c}]`));
    return t3[t3.length - 1];
  })(o2), i2 = void 0 !== r2 ? r2.nextSibling : null;
  s2.setAttribute(c, a), s2.setAttribute(l, u);
  const h2 = t2 || Ne();
  return h2 && s2.setAttribute("nonce", h2), o2.insertBefore(s2, i2), s2;
}, Oe = class {
  constructor(e2, t2) {
    this.element = Ce(e2, t2), this.element.appendChild(document.createTextNode("")), this.sheet = ((e3) => {
      var t3;
      if (e3.sheet) return e3.sheet;
      const n2 = null !== (t3 = e3.getRootNode().styleSheets) && void 0 !== t3 ? t3 : document.styleSheets;
      for (let t4 = 0, o2 = n2.length; t4 < o2; t4++) {
        const o3 = n2[t4];
        if (o3.ownerNode === e3) return o3;
      }
      throw v(17);
    })(this.element), this.length = 0;
  }
  insertRule(e2, t2) {
    try {
      return this.sheet.insertRule(t2, e2), this.length++, true;
    } catch (e3) {
      return false;
    }
  }
  deleteRule(e2) {
    this.sheet.deleteRule(e2), this.length--;
  }
  getRule(e2) {
    const t2 = this.sheet.cssRules[e2];
    return t2 && t2.cssText ? t2.cssText : "";
  }
}, Ee = class {
  constructor(e2, t2) {
    this.element = Ce(e2, t2), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(e2, t2) {
    if (e2 <= this.length && e2 >= 0) {
      const n2 = document.createTextNode(t2);
      return this.element.insertBefore(n2, this.nodes[e2] || null), this.length++, true;
    }
    return false;
  }
  deleteRule(e2) {
    this.element.removeChild(this.nodes[e2]), this.length--;
  }
  getRule(e2) {
    return e2 < this.length ? this.nodes[e2].textContent : "";
  }
};
let Ae = d;
const Pe = { isServer: !d, useCSSOMInjection: !f };
class _e {
  static registerId(e2) {
    return C$1(e2);
  }
  constructor(e2 = $$1, t2 = {}, n2) {
    this.options = Object.assign(Object.assign({}, Pe), e2), this.gs = t2, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n2), this.server = !!e2.isServer, !this.server && d && Ae && (Ae = false, be(this)), de(this, () => ((e3) => {
      const t3 = e3.getTag(), { length: n3 } = t3;
      let o2 = "";
      for (let s2 = 0; s2 < n3; s2++) {
        const n4 = O$1(s2);
        if (void 0 === n4) continue;
        const r2 = e3.names.get(n4);
        if (void 0 === r2 || !r2.size) continue;
        const i2 = t3.getGroup(s2);
        if (0 === i2.length) continue;
        const a2 = c + ".g" + s2 + '[id="' + n4 + '"]';
        let l2 = "";
        for (const e4 of r2) e4.length > 0 && (l2 += e4 + ",");
        o2 += i2 + a2 + '{content:"' + l2 + '"}' + h;
      }
      return o2;
    })(this));
  }
  rehydrate() {
    !this.server && d && be(this);
  }
  reconstructWithOptions(e2, t2 = true) {
    const n2 = new _e(Object.assign(Object.assign({}, this.options), e2), this.gs, t2 && this.names || void 0);
    return n2.keyframeIds = new Set(this.keyframeIds), !this.server && d && e2.target !== this.options.target && ge(this.options.target) !== ge(e2.target) && be(n2), n2;
  }
  allocateGSInstance(e2) {
    return this.gs[e2] = (this.gs[e2] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (e2 = (({ useCSSOMInjection: e3, target: t2, nonce: n2 }) => e3 ? new Oe(t2, n2) : new Ee(t2, n2))(this.options), new pe(e2)));
    var e2;
  }
  hasNameForId(e2, t2) {
    var n2, o2;
    return null !== (o2 = null === (n2 = this.names.get(e2)) || void 0 === n2 ? void 0 : n2.has(t2)) && void 0 !== o2 && o2;
  }
  registerName(e2, t2) {
    C$1(e2), e2.startsWith(m) && this.keyframeIds.add(e2);
    const n2 = this.names.get(e2);
    n2 ? n2.add(t2) : this.names.set(e2, /* @__PURE__ */ new Set([t2]));
  }
  insertRules(e2, t2, n2) {
    this.registerName(e2, t2), this.getTag().insertRules(C$1(e2), n2);
  }
  clearNames(e2) {
    this.names.has(e2) && this.names.get(e2).clear();
  }
  clearRules(e2) {
    this.getTag().clearGroup(C$1(e2)), this.clearNames(e2);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const Ie = /* @__PURE__ */ new WeakSet(), $e = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function Re(e2, t2) {
  return null == t2 || "boolean" == typeof t2 || "" === t2 ? "" : "number" != typeof t2 || 0 === t2 || e2 in $e || e2.startsWith("--") ? String(t2).trim() : t2 + "px";
}
const je = 47;
function xe(e2) {
  if (45 === e2.charCodeAt(0) && 45 === e2.charCodeAt(1)) return e2;
  let t2 = "";
  for (let n2 = 0; n2 < e2.length; n2++) {
    const o2 = e2.charCodeAt(n2);
    t2 += o2 >= 65 && o2 <= 90 ? "-" + String.fromCharCode(o2 + 32) : e2[n2];
  }
  return t2.startsWith("ms-") ? "-" + t2 : t2;
}
const Te = Symbol.for("sc-keyframes");
function ke(e2) {
  return "object" == typeof e2 && null !== e2 && Te in e2;
}
function De(e2) {
  return re(e2) && !(e2.prototype && e2.prototype.isReactComponent);
}
const Ve = (e2) => null == e2 || false === e2 || "" === e2, Me = Symbol.for("react.client.reference");
function Ge(e2) {
  return e2.$$typeof === Me;
}
function ze(e2, t2) {
  for (const n2 in e2) {
    const o2 = e2[n2];
    e2.hasOwnProperty(n2) && !Ve(o2) && (Array.isArray(o2) && Ie.has(o2) || re(o2) ? t2.push(xe(n2) + ":", o2, ";") : ue(o2) ? (t2.push(n2 + " {"), ze(o2, t2), t2.push("}")) : t2.push(xe(n2) + ": " + Re(n2, o2) + ";"));
  }
}
function We(e2, t2, n2, o2, s2 = []) {
  if (Ve(e2)) return s2;
  const r2 = typeof e2;
  if ("string" === r2) return s2.push(e2), s2;
  if ("function" === r2) {
    if (Ge(e2)) return s2;
    if (De(e2) && t2) {
      const r3 = e2(t2);
      return We(r3, t2, n2, o2, s2);
    }
    return s2.push(e2), s2;
  }
  if (Array.isArray(e2)) {
    for (let r3 = 0; r3 < e2.length; r3++) We(e2[r3], t2, n2, o2, s2);
    return s2;
  }
  return ce(e2) ? (s2.push(`.${e2.styledComponentId}`), s2) : ke(e2) ? (n2 ? (e2.inject(n2, o2), s2.push(e2.getName(o2))) : s2.push(e2), s2) : Ge(e2) ? (s2) : ue(e2) ? e2.toString !== Object.prototype.toString ? (s2.push(e2.toString()), s2) : (ze(e2, s2), s2) : (s2.push(e2.toString()), s2);
}
const Le = F$1(u);
class Be {
  constructor(e2, t2, n2) {
    this.rules = e2, this.componentId = t2, this.baseHash = G$1(Le, t2), this.baseStyle = n2, _e.registerId(t2);
  }
  generateAndInjectStyles(e2, t2, n2) {
    let o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t2, n2) : "";
    {
      let s2 = "";
      for (let o3 = 0; o3 < this.rules.length; o3++) {
        const r2 = this.rules[o3];
        if ("string" == typeof r2) s2 += r2;
        else if (r2) if (De(r2)) {
          const o4 = r2(e2);
          "string" == typeof o4 ? s2 += o4 : null != o4 && false !== o4 && (s2 += le(We(o4, e2, t2, n2)));
        } else s2 += le(We(r2, e2, t2, n2));
      }
      if (s2) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const e3 = n2.hash ? n2.hash + s2 : s2;
        let r2 = this.dynamicNameCache.get(e3);
        if (!r2) {
          if (r2 = V$1(G$1(G$1(this.baseHash, n2.hash), s2) >>> 0), this.dynamicNameCache.size >= 200) {
            const e4 = this.dynamicNameCache.keys().next().value;
            void 0 !== e4 && this.dynamicNameCache.delete(e4);
          }
          this.dynamicNameCache.set(e3, r2);
        }
        if (!t2.hasNameForId(this.componentId, r2)) {
          const e4 = n2(s2, "." + r2, void 0, this.componentId);
          t2.insertRules(this.componentId, r2, e4);
        }
        o2 = ae(o2, r2);
      }
    }
    return o2;
  }
}
const qe = /&/g;
function He(e2, t2) {
  let n2 = 0;
  for (; --t2 >= 0 && 92 === e2.charCodeAt(t2); ) n2++;
  return !(1 & ~n2);
}
function Ye(e2) {
  const t2 = e2.length;
  let n2 = "", o2 = 0, s2 = 0, r2 = 0, i2 = false, c2 = false;
  for (let a2 = 0; a2 < t2; a2++) {
    const l2 = e2.charCodeAt(a2);
    if (0 !== r2 || i2 || l2 !== je || 42 !== e2.charCodeAt(a2 + 1)) if (i2) 42 === l2 && e2.charCodeAt(a2 + 1) === je && (i2 = false, a2++);
    else if (34 !== l2 && 39 !== l2 || He(e2, a2)) {
      if (0 === r2) if (123 === l2) s2++;
      else if (125 === l2) {
        if (s2--, s2 < 0) {
          c2 = true;
          let n3 = a2 + 1;
          for (; n3 < t2; ) {
            const t3 = e2.charCodeAt(n3);
            if (59 === t3 || 10 === t3) break;
            n3++;
          }
          n3 < t2 && 59 === e2.charCodeAt(n3) && n3++, s2 = 0, a2 = n3 - 1, o2 = n3;
          continue;
        }
        0 === s2 && (n2 += e2.substring(o2, a2 + 1), o2 = a2 + 1);
      } else 59 === l2 && 0 === s2 && (n2 += e2.substring(o2, a2 + 1), o2 = a2 + 1);
    } else 0 === r2 ? r2 = l2 : r2 === l2 && (r2 = 0);
    else i2 = true, a2++;
  }
  return c2 || 0 !== s2 || 0 !== r2 ? (o2 < t2 && 0 === s2 && 0 === r2 && (n2 += e2.substring(o2)), n2) : e2;
}
function Ue(e2, t2) {
  const n2 = t2 + " ", o2 = "," + n2;
  for (let s2 = 0; s2 < e2.length; s2++) {
    const r2 = e2[s2];
    if ("rule" === r2.type) {
      r2.value = (n2 + r2.value).replaceAll(",", o2);
      const e3 = r2.props, t3 = [];
      for (let o3 = 0; o3 < e3.length; o3++) t3[o3] = n2 + e3[o3];
      r2.props = t3;
    }
    Array.isArray(r2.children) && "@keyframes" !== r2.type && Ue(r2.children, t2);
  }
  return e2;
}
function Je({ options: e2 = $$1, plugins: t2 = I$1 } = $$1) {
  let n2, s2, r2;
  const i2 = (e3, t3, o2) => o2.startsWith(s2) && o2.endsWith(s2) && o2.replaceAll(s2, "").length > 0 ? `.${n2}` : e3, c2 = t2.slice();
  c2.push((e3) => {
    e3.type === RULESET && e3.value.includes("&") && (r2 || (r2 = new RegExp(`\\${s2}\\b`, "g")), e3.props[0] = e3.props[0].replace(qe, s2).replace(r2, i2));
  }), e2.prefix && c2.push(prefixer), c2.push(stringify);
  let a2 = [];
  const l2 = middleware(c2.concat(rulesheet((e3) => a2.push(e3)))), u2 = (t3, i3 = "", c3 = "", u3 = "&") => {
    n2 = u3, s2 = i3, r2 = void 0;
    const h3 = (function(e3) {
      const t4 = -1 !== e3.indexOf("//"), n3 = -1 !== e3.indexOf("}");
      if (!t4 && !n3) return e3;
      if (!t4) return Ye(e3);
      const o2 = e3.length;
      let s3 = "", r3 = 0, i4 = 0, c4 = 0, a3 = 0, l3 = 0, u4 = false;
      for (; i4 < o2; ) {
        const t5 = e3.charCodeAt(i4);
        if (34 !== t5 && 39 !== t5 || He(e3, i4)) if (0 === c4) if (t5 === je && i4 + 1 < o2 && 42 === e3.charCodeAt(i4 + 1)) {
          for (i4 += 2; i4 + 1 < o2 && (42 !== e3.charCodeAt(i4) || e3.charCodeAt(i4 + 1) !== je); ) i4++;
          i4 += 2;
        } else if (40 !== t5) if (41 !== t5) if (a3 > 0) i4++;
        else if (42 === t5 && i4 + 1 < o2 && e3.charCodeAt(i4 + 1) === je) s3 += e3.substring(r3, i4), i4 += 2, r3 = i4, u4 = true;
        else if (t5 === je && i4 + 1 < o2 && e3.charCodeAt(i4 + 1) === je) {
          for (s3 += e3.substring(r3, i4); i4 < o2 && 10 !== e3.charCodeAt(i4); ) i4++;
          r3 = i4, u4 = true;
        } else 123 === t5 ? l3++ : 125 === t5 && l3--, i4++;
        else a3 > 0 && a3--, i4++;
        else a3++, i4++;
        else i4++;
        else 0 === c4 ? c4 = t5 : c4 === t5 && (c4 = 0), i4++;
      }
      return u4 ? (r3 < o2 && (s3 += e3.substring(r3)), 0 === l3 ? s3 : Ye(s3)) : 0 === l3 ? e3 : Ye(e3);
    })(t3);
    let d3 = compile(c3 || i3 ? c3 + " " + i3 + " { " + h3 + " }" : h3);
    return e2.namespace && (d3 = Ue(d3, e2.namespace)), a2 = [], serialize(d3, l2), a2;
  }, h2 = e2;
  let d2 = M$1;
  for (let e3 = 0; e3 < t2.length; e3++) t2[e3].name || v(15), d2 = G$1(d2, t2[e3].name);
  return (null == h2 ? void 0 : h2.namespace) && (d2 = G$1(d2, h2.namespace)), (null == h2 ? void 0 : h2.prefix) && (d2 = G$1(d2, "p")), u2.hash = d2 !== M$1 ? d2.toString() : "", u2;
}
const Xe = new _e(), Ke = Je(), Qe = R$2.createContext({ shouldForwardProp: void 0, styleSheet: Xe, stylis: Ke, stylisPlugins: void 0 }); Qe.Consumer;
function et() {
  return R$2.useContext(Qe);
}
const nt = R$2.createContext(void 0); nt.Consumer;
const it = Object.prototype.hasOwnProperty, ct = {};
function at(e2, t2) {
  const n2 = "string" != typeof e2 ? "sc" : T$1(e2);
  ct[n2] = (ct[n2] || 0) + 1;
  const o2 = n2 + "-" + z$1(u + n2 + ct[n2]);
  return t2 ? t2 + "-" + o2 : o2;
}
function ut(o2, s2, r2) {
  const i2 = ce(o2), c2 = o2, a2 = !L$1(o2), { attrs: l2 = I$1, componentId: u2 = at(s2.displayName, s2.parentComponentId), displayName: h2 = B$1(o2) } = s2, d2 = s2.displayName && s2.componentId ? T$1(s2.displayName) + "-" + s2.componentId : s2.componentId || u2, p2 = i2 && c2.attrs ? c2.attrs.concat(l2).filter(Boolean) : l2;
  let { shouldForwardProp: f2 } = s2;
  if (i2 && c2.shouldForwardProp) {
    const e2 = c2.shouldForwardProp;
    if (s2.shouldForwardProp) {
      const t2 = s2.shouldForwardProp;
      f2 = (n2, o3) => e2(n2, o3) && t2(n2, o3);
    } else f2 = e2;
  }
  const m2 = new Be(r2, d2, i2 ? c2.componentStyle : void 0);
  function y2(o3, s3) {
    return (function(o4, s4, r3) {
      const { attrs: i3, componentStyle: c3, defaultProps: a3, foldedComponentIds: l3, styledComponentId: u3, target: h3 } = o4, d3 = R$2.useContext(nt), p3 = et(), f3 = o4.shouldForwardProp || p3.shouldForwardProp;
      const m3 = R$1(s4, d3, a3) || $$1;
      let y3, g3;
      {
        const e2 = R$2.useRef(null), n2 = e2.current;
        if (null !== n2 && n2[1] === m3 && n2[2] === p3.styleSheet && n2[3] === p3.stylis && n2[7] === c3 && (function(e3, t2, n3) {
          const o5 = e3, s5 = t2;
          let r4 = 0;
          for (const e4 in s5) if (it.call(s5, e4) && (r4++, o5[e4] !== s5[e4])) return false;
          return r4 === n3;
        })(n2[0], s4, n2[4])) y3 = n2[5], g3 = n2[6];
        else {
          y3 = (function(e3, t3, n3) {
            const o5 = Object.assign(Object.assign({}, t3), { className: void 0, theme: n3 }), s5 = e3.length > 1;
            for (let n4 = 0; n4 < e3.length; n4++) {
              const r4 = e3[n4], i4 = re(r4) ? r4(s5 ? Object.assign({}, o5) : o5) : r4;
              for (const e4 in i4) "className" === e4 ? o5.className = ae(o5.className, i4[e4]) : "style" === e4 ? o5.style = Object.assign(Object.assign({}, o5.style), i4[e4]) : e4 in t3 && void 0 === t3[e4] || (o5[e4] = i4[e4]);
            }
            return "className" in t3 && "string" == typeof t3.className && (o5.className = ae(o5.className, t3.className)), o5;
          })(i3, s4, m3), g3 = c3.generateAndInjectStyles(y3, p3.styleSheet, p3.stylis);
          let t2 = 0;
          for (const e3 in s4) it.call(s4, e3) && t2++;
          e2.current = [s4, m3, p3.styleSheet, p3.stylis, t2, y3, g3, c3];
        }
      }
      const v2 = y3.as || h3, S2 = (function(t2, n2, o5, s5) {
        const r4 = {};
        for (const i4 in t2) void 0 === t2[i4] || "$" === i4[0] || "as" === i4 || "theme" === i4 && t2.theme === o5 || ("forwardedAs" === i4 ? r4.as = t2.forwardedAs : s5 && !s5(i4, n2) || (r4[i4] = t2[i4], s5 || true));
        return r4;
      })(y3, v2, m3, f3);
      let b2 = ae(l3, u3);
      return g3 && (b2 += " " + g3), y3.className && (b2 += " " + y3.className), S2[L$1(v2) && v2.includes("-") ? "class" : "className"] = b2, r3 && (S2.ref = r3), __mf_10(v2, S2);
    })(g2, o3, s3);
  }
  y2.displayName = h2;
  let g2 = R$2.forwardRef(y2);
  return g2.attrs = p2, g2.componentStyle = m2, g2.displayName = h2, g2.shouldForwardProp = f2, g2.foldedComponentIds = i2 ? ae(c2.foldedComponentIds, c2.styledComponentId) : "", g2.styledComponentId = d2, g2.target = i2 ? c2.target : o2, Object.defineProperty(g2, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(e2) {
    this._foldedDefaultProps = i2 ? (function(e3, ...t2) {
      for (const n2 of t2) he(e3, n2, true);
      return e3;
    })({}, c2.defaultProps, e2) : e2;
  } }), de(g2, () => `.${g2.styledComponentId}`), a2 && se(g2, o2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), g2;
}
var ht = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function dt(e2, t2) {
  const n2 = [e2[0]];
  for (let o2 = 0, s2 = t2.length; o2 < s2; o2 += 1) n2.push(t2[o2], e2[o2 + 1]);
  return n2;
}
const pt = (e2) => (Ie.add(e2), e2);
function ft(e2, ...t2) {
  if (re(e2) || ue(e2)) return pt(We(dt(I$1, [e2, ...t2])));
  const n2 = e2;
  return 0 === t2.length && 1 === n2.length && "string" == typeof n2[0] ? We(n2) : pt(We(dt(n2, t2)));
}
function mt(e2, t2, n2 = $$1) {
  if (!t2) throw v(1, t2);
  const o2 = (o3, ...s2) => e2(t2, n2, ft(o3, ...s2));
  return o2.attrs = (o3) => mt(e2, t2, Object.assign(Object.assign({}, n2), { attrs: Array.prototype.concat(n2.attrs, o3).filter(Boolean) })), o2.withConfig = (o3) => mt(e2, t2, Object.assign(Object.assign({}, n2), o3)), o2;
}
const yt = (e2) => mt(ut, e2), gt = yt;
ht.forEach((e2) => {
  gt[e2] = yt(e2);
});

var reactContenteditable = {};

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

var propTypes = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

{
  propTypes.exports = factoryWithThrowingShims();
}

var propTypesExports = propTypes.exports;

var __extends = (reactContenteditable && reactContenteditable.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (reactContenteditable && reactContenteditable.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (reactContenteditable && reactContenteditable.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (reactContenteditable && reactContenteditable.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (reactContenteditable && reactContenteditable.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (reactContenteditable && reactContenteditable.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (reactContenteditable && reactContenteditable.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(reactContenteditable, "__esModule", { value: true });
var React = __importStar(require$$1);
var fast_deep_equal_1 = __importDefault(fastDeepEqual);
var PropTypes = __importStar(propTypesExports);
function normalizeHtml(str) {
    return str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' ').replace(/<br \/>/g, '<br>');
}
function replaceCaret(el) {
    // Place the caret at the end of the element
    var target = document.createTextNode('');
    el.appendChild(target);
    // do not move caret if element was not focused
    var isTargetFocused = document.activeElement === el;
    if (target !== null && target.nodeValue !== null && isTargetFocused) {
        var sel = window.getSelection();
        if (sel !== null) {
            var range = document.createRange();
            range.setStart(target, target.nodeValue.length);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
        if (el instanceof HTMLElement)
            el.focus();
    }
}
/**
 * A simple component for an html element with editable contents.
 */
var ContentEditable = /** @class */ (function (_super) {
    __extends(ContentEditable, _super);
    function ContentEditable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastHtml = _this.props.html;
        _this.el = typeof _this.props.innerRef === 'function' ? { current: null } : React.createRef();
        _this.getEl = function () { return (_this.props.innerRef && typeof _this.props.innerRef !== 'function' ? _this.props.innerRef : _this.el).current; };
        _this.emitChange = function (originalEvt) {
            var el = _this.getEl();
            if (!el)
                return;
            var html = el.innerHTML;
            if (_this.props.onChange && html !== _this.lastHtml) {
                // Clone event with Object.assign to avoid
                // "Cannot assign to read only property 'target' of object"
                var evt = Object.assign({}, originalEvt, {
                    target: {
                        value: html
                    }
                });
                _this.props.onChange(evt);
            }
            _this.lastHtml = html;
        };
        return _this;
    }
    ContentEditable.prototype.render = function () {
        var _this = this;
        var _a = this.props, tagName = _a.tagName, html = _a.html, innerRef = _a.innerRef, props = __rest(_a, ["tagName", "html", "innerRef"]);
        return React.createElement(tagName || 'div', __assign(__assign({}, props), { ref: typeof innerRef === 'function' ? function (current) {
                innerRef(current);
                _this.el.current = current;
            } : innerRef || this.el, onInput: this.emitChange, onBlur: this.props.onBlur || this.emitChange, onKeyUp: this.props.onKeyUp || this.emitChange, onKeyDown: this.props.onKeyDown || this.emitChange, contentEditable: !this.props.disabled, dangerouslySetInnerHTML: { __html: html } }), this.props.children);
    };
    ContentEditable.prototype.shouldComponentUpdate = function (nextProps) {
        var props = this.props;
        var el = this.getEl();
        // We need not rerender if the change of props simply reflects the user's edits.
        // Rerendering in this case would make the cursor/caret jump
        // Rerender if there is no element yet... (somehow?)
        if (!el)
            return true;
        // ...or if html really changed... (programmatically, not by user edit)
        if (normalizeHtml(nextProps.html) !== normalizeHtml(el.innerHTML)) {
            return true;
        }
        // Handle additional properties
        return props.disabled !== nextProps.disabled ||
            props.tagName !== nextProps.tagName ||
            props.className !== nextProps.className ||
            props.innerRef !== nextProps.innerRef ||
            props.placeholder !== nextProps.placeholder ||
            !(0, fast_deep_equal_1.default)(props.style, nextProps.style);
    };
    ContentEditable.prototype.componentDidUpdate = function () {
        var el = this.getEl();
        if (!el)
            return;
        // Perhaps React (whose VDOM gets outdated because we often prevent
        // rerendering) did not update the DOM. So we update it manually now.
        if (this.props.html !== el.innerHTML) {
            el.innerHTML = this.props.html;
        }
        this.lastHtml = this.props.html;
        replaceCaret(el);
    };
    ContentEditable.propTypes = {
        html: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        tagName: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        innerRef: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.func,
        ])
    };
    return ContentEditable;
}(React.Component));
var _default = reactContenteditable.default = ContentEditable;

const E=R$2.createContext({}),w=__mf_9({});function O(t){const{store:n}=__mf_18(w),r=__mf_38(n,t);return __mf_23((()=>({store:n,...r})),[n,r])}function C(e){const{id:n,depth:r,connectors:a}=__mf_18(E),{actions:o,...i}=O((t=>n&&t.layers[n]&&e&&e(t.layers[n]))),{children:d}=__mf_29(((e,t)=>({children:e.nodes[n]&&t.node(n).descendants()}))),c=__mf_23((()=>({toggleLayer:()=>o.toggleLayer(n),setExpandedState:e=>o.setExpandedState(n,e)})),[o,n]),p=__mf_23((()=>__mf_41({layer:e=>a.layer(e,n),drag:e=>a.drag(e,n),layerHeader:e=>a.layerHeader(e,n)})),[a,n]);return {id:n,depth:r,children:d,actions:c,connectors:p,...i}}const L=()=>{const{id:e,depth:t,children:n,expanded:r}=C((e=>({expanded:e.expanded}))),{data:a,shouldBeExpanded:o}=__mf_29(((t,n)=>{const r=n.getEvent("selected").first();return {data:t.nodes[e]&&t.nodes[e].data,shouldBeExpanded:r&&n.node(r).ancestors(true).includes(e)}})),{actions:{registerLayer:d,toggleLayer:s},renderLayer:l,expandRootOnLoad:g}=O((e=>({renderLayer:e.options.renderLayer,expandRootOnLoad:e.options.expandRootOnLoad}))),[f,y]=__mf_26(false);__mf_22((()=>{d(e),y(true);}),[d,e]);const x=__mf_25(r);x.current=r;const b=__mf_25(g&&e===__mf_1);return __mf_20((()=>{!x.current&&o&&s(e);}),[s,e,o]),__mf_20((()=>{b.current&&s(e);}),[s,e]),a&&f?R$2.createElement("div",{className:`craft-layer-node ${e}`},R$2.createElement(l,{},n&&r?n.map((e=>R$2.createElement(P,{key:e,id:e,depth:t+1}))):null)):null},j=__mf_9(null),P=({id:e,depth:n})=>{const r=__mf_18(j),{store:a}=__mf_18(w);__mf_25(a).current=a;const o=__mf_23((()=>r.createConnectorsUsage()),[r]),d=__mf_23((()=>__mf_41(o.connectors)),[o]);__mf_20((()=>(o.register(),()=>{o.cleanup();})),[o]);const{exists:c}=__mf_29((t=>({exists:!!t.nodes[e]})));return c?R$2.createElement(E.Provider,{value:{id:e,depth:n,connectors:d}},R$2.createElement(L,null)):null},D=e=>({setLayerEvent:(t,n)=>{if(null!==n&&!e.layers[n])return;const r=e.events[t];r&&n!==r&&(e.layers[r].event[t]=false),n?(e.layers[n].event[t]=true,e.events[t]=n):e.events[t]=null;},registerLayer:t=>{e.layers[t]||(e.layers[t]={dom:null,headingDom:null,expanded:false,id:t,event:{selected:false,hovered:false}});},setDOM:(t,n)=>{e.layers[t]={...e.layers[t],...n.dom?{dom:n.dom}:{},...n.headingDom?{headingDom:n.headingDom}:{}};},toggleLayer:t=>{e.layers[t].expanded=!e.layers[t].expanded;},setExpandedState:(t,n)=>{e.layers[t].expanded=n;},setIndicator:t=>{e.events.indicator=t;}});function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),true).forEach((function(t){H(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function H(e,t,n){return (t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}class $ extends __mf_6{getLayer(e){return this.options.layerStore.getState().layers[e]}handlers(){const e=this.derived.options.store,{layerStore:t}=this.options;return {layer:(n,r)=>{t.actions.setDOM(r,{dom:n});const a=this.inherit((e=>{e.select(n,r),e.hover(n,r),e.drag(n,r);})),o=this.addCraftEventListener(n,"mouseover",(e=>{e.craft.stopPropagation(),t.actions.setLayerEvent("hovered",r);})),i=this.addCraftEventListener(n,"drop",(e=>{t.actions.setIndicator(null);})),d=this.addCraftEventListener(n,"dragover",(n=>{n.craft.stopPropagation(),n.preventDefault();const{indicator:r,currentCanvasHovered:a}=$.events;if(a&&r){var o;const i=null===(o=this.getLayer(a.id))||void 0===o?void 0:o.getBoundingClientRect();if(n.clientY>((null==i?void 0:i.top)||0)+10&&n.clientY<((null==i?void 0:i.bottom)||0)-10){const n=a.data.nodes[a.data.nodes.length-1];if(!n)return void($.events.indicator=k(k({},r),{},{placement:k(k({},r.placement),{},{index:0,where:"before",parent:a}),onCanvas:true}));$.events.indicator=k(k({},r),{},{placement:{currentNode:e.query.node(n).get(),index:a.data.nodes.length,where:"after",parent:a},onCanvas:true}),t.actions.setIndicator($.events.indicator);}}})),s=this.addCraftEventListener(n,"dragenter",(n=>{n.craft.stopPropagation(),n.preventDefault();const a=$.draggedElement;if(!a)return;const o=e.query.getDropPlaceholder(a,r,{x:n.clientX,y:n.clientY},(e=>{const t=this.getLayer(e.id);return t&&t.dom}));if(o){const{placement:{parent:r}}=o;let a;try{var i,d;a=null===(i=this.getLayer(r.id))||void 0===i||null===(d=i.headingDom)||void 0===d?void 0:d.getBoundingClientRect();}catch(n){}if($.events.currentCanvasHovered=null,e.query.node(r.id).isCanvas()&&r.data.parent){const t=e.query.node(r.data.parent).get();var s,l,c,p;e.query.node(t.id).isCanvas()&&($.events.currentCanvasHovered=r,(n.clientY>((null===(s=a)||void 0===s?void 0:s.bottom)||0)-10&&!this.getLayer(r.id).expanded||n.clientY<((null===(l=a)||void 0===l?void 0:l.top)||0)+10)&&(o.placement.parent=t,o.placement.currentNode=r,o.placement.index=t.data.nodes?t.data.nodes.indexOf(r.id):0,n.clientY>((null===(c=a)||void 0===c?void 0:c.bottom)||0)-10&&!this.getLayer(r.id).expanded?o.placement.where="after":n.clientY<((null===(p=a)||void 0===p?void 0:p.top)||0)+10&&(o.placement.where="before")));}$.events.indicator=k(k({},o),{},{onCanvas:false}),t.actions.setIndicator($.events.indicator);}}));return ()=>{a(),o(),d(),s(),i();}},layerHeader:(e,n)=>{t.actions.setDOM(n,{headingDom:e});},drag:(n,r)=>{n.setAttribute("draggable","true");const a=this.addCraftEventListener(n,"dragstart",(e=>{e.craft.stopPropagation(),$.draggedElement=r;})),o=this.addCraftEventListener(n,"dragend",(n=>{n.craft.stopPropagation();const r=$.events;if(r.indicator&&!r.indicator.error){const{placement:t}=r.indicator,{parent:n,index:a,where:o}=t,{id:i}=n;e.actions.move($.draggedElement,i,a+("after"===o?1:0));}$.draggedElement=null,$.events.indicator=null,t.actions.setIndicator(null);}));return ()=>{n.removeAttribute("draggable"),a(),o(),t.actions.setIndicator(null);}}}}}H($,"draggedElement",void 0),H($,"events",{indicator:null,currentCanvasHovered:null});const S=({children:e})=>{const{layers:t,events:r}=O((e=>e)),{query:a}=__mf_29((e=>({enabled:e.options.enabled}))),{indicator:o}=a.getOptions();let d;try{d=(()=>{const{indicator:e}=r;if(e){const{placement:{where:n,parent:r,currentNode:a},error:i}=e,d=a?a.id:r.id;let s;const l=i?o.error:o.success;if(e.onCanvas&&null!=t[r.id].dom){const e=t[r.id]?.dom?.getBoundingClientRect(),n=t[r.id]?.headingDom?.getBoundingClientRect();return {top:n?.top,left:e?.left,width:e?.width,height:n?.height,background:"transparent",borderWidth:"1px",borderColor:l}}{if(!t[d]&&null==t[d].headingDom)return;const e=t[d]?.headingDom?.getBoundingClientRect(),r=t[d]?.dom?.getBoundingClientRect();return s="after"!==n&&a?r?.top:r?.top+r?.height,{top:s,left:e?.left,width:r.width+r?.left-e?.left,height:2,borderWidth:0,background:l}}}})();}catch(e){}return R$2.createElement("div",null,r.indicator?R$2.createElement(__mf_29$1,{style:d}):null,e)},B=({children:e})=>{const{store:t}=O(),n=__mf_31(),r=__mf_23((()=>n.derive($,{layerStore:t})),[n,t]);return R$2.createElement(j.Provider,{value:r},R$2.createElement(S,null),e)},M=()=>{const{id:e}=C(),{displayName:t,actions:n}=__mf_29((t=>({displayName:t.nodes[e]&&t.nodes[e].data.custom.displayName?t.nodes[e].data.custom.displayName:t.nodes[e].data.displayName,hidden:t.nodes[e]&&t.nodes[e].data.hidden}))),[r,a]=__mf_26(false),o=__mf_25(null),d=__mf_17((e=>{o.current&&!o.current.contains(e.target)&&a(false);}),[]);return __mf_20((()=>()=>{window.removeEventListener("click",d);}),[d]),R$2.createElement(_default,{html:t,disabled:!r,ref:e=>{e&&(o.current=e.el.current,window.removeEventListener("click",d),window.addEventListener("click",d));},onChange:t=>{n.setCustom(e,(e=>e.displayName=t.target.value));},tagName:"h2",onDoubleClick:()=>{r||a(true);}})};var R;function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},z.apply(this,arguments)}var Y,_,q=function(e){return __mf_10("svg",z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 6"},e),R||(R=__mf_10("path",{d:"M9.99 1.01A1 1 0 0 0 8.283.303L5 3.586 1.717.303A1 1 0 1 0 .303 1.717l3.99 3.98a1 1 0 0 0 1.414 0l3.99-3.98a.997.997 0 0 0 .293-.707Z"})))};function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},I.apply(this,arguments)}var A,T,V=function(e){return __mf_10("svg",I({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:16,height:16},e),Y||(Y=__mf_10("path",{fill:"none",d:"M0 0h24v24H0z"})),_||(_=__mf_10("path",{d:"M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})))};function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},Z.apply(this,arguments)}var W=function(e){return __mf_10("svg",Z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},e),A||(A=__mf_10("path",{className:"linked_svg__a",d:"M16.5 9h-1a.5.5 0 0 0-.5.5V15H3V3h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Z"})),T||(T=__mf_10("path",{className:"linked_svg__a",d:"M16.75 1h-5.373a.4.4 0 0 0-.377.4.392.392 0 0 0 .117.28l1.893 1.895-3.52 3.521a.5.5 0 0 0 0 .707l.706.708a.5.5 0 0 0 .708 0l3.521-3.521 1.893 1.892A.39.39 0 0 0 16.6 7a.4.4 0 0 0 .4-.377V1.25a.25.25 0 0 0-.25-.25Z"})))};const U=gt.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px;
  background: ${e=>e.selected?"#2680eb":"transparent"};
  color: ${e=>e.selected?"#fff":"inherit"};
  svg {
    fill: ${e=>e.selected?"#fff":"#808184"};
    margin-top: 2px;
  }
  .inner {
    flex: 1;
    > div {
      padding: 0px;
      flex: 1;
      display: flex;
      margin-left: ${e=>10*e.depth}px;
      align-items: center;
      div.layer-name {
        flex: 1;
        h2 {
          font-size: 15px;
          line-height: 26px;
        }
      }
    }
  }
`,X=gt.a`
  width: 8px;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  transform: rotate(${e=>e.expanded?180:0}deg);
  opacity: 0.7;
  cursor: pointer;
`,F=gt.a`
  width: 14px;
  height: 14px;
  margin-right: 10px;
  position: relative;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: ${e=>e.isHidden?.2:1};
  }
  &:after {
    content: ' ';
    width: 2px;
    height: ${e=>e.isHidden?100:0}%;
    position: absolute;
    left: 2px;
    top: 3px;
    background: ${e=>e.selected?"#fff":"#808184"};
    transform: rotate(-45deg);
    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    transform-origin: 0% 0%;
    opacity: ${e=>e.isHidden?.4:1};
  }
`,G=gt.div`
  margin-left: -22px;
  margin-right: 10px;

  svg {
    width: 12px;
    height: 12px;
  }
`,J=()=>{const{id:e,depth:t,expanded:n,children:r,connectors:{drag:a,layerHeader:o},actions:{toggleLayer:d}}=C((e=>({expanded:e.expanded}))),{hidden:s,actions:l,selected:c,topLevel:p}=__mf_29(((t,n)=>{const r=n.getEvent("selected").first()===e;return {hidden:t.nodes[e]&&t.nodes[e].data.hidden,selected:r,topLevel:n.node(e).isTopLevelCanvas()}}));return R$2.createElement(U,{selected:c,ref:a,depth:t},R$2.createElement(F,{selected:c,isHidden:s,onClick:()=>l.setHidden(e,!s)},R$2.createElement(V,null)),R$2.createElement("div",{className:"inner"},R$2.createElement("div",{ref:o},p?R$2.createElement(G,null,R$2.createElement(W,null)):null,R$2.createElement("div",{className:"layer-name s"},R$2.createElement(M,null)),R$2.createElement("div",null,r&&r.length?R$2.createElement(X,{expanded:n,onMouseDown:()=>d()},R$2.createElement(q,null)):null))))},K=gt.div`
  background: ${e=>e.hovered?"#f1f1f1":"transparent"};
  display: block;
  padding-bottom: ${e=>e.hasCanvases&&e.expanded?5:0}px;
`,Q=gt.div`
  margin: 0 0 0 ${e=>e.hasCanvases?35:0}px;
  background: ${e=>e.hasCanvases?"rgba(255, 255, 255, 0.02)":"transparent"};
  position: relative;

  ${e=>e.hasCanvases?'\n  \n  box-shadow: 0px 0px 44px -1px #00000014;\n  border-radius: 10px;\n  margin-right: 5px;\n  margin-bottom:5px;\n  margin-top:5px; \n  > * { overflow:hidden; }\n    &:before { \n      position:absolute;\n      left:-19px;\n      width: 2px;\n      height:100%;\n      content: " ";\n      background:#00000012;\n    }\n  ':""}
`,ee=({children:e})=>{const{id:t,expanded:n,hovered:r,connectors:{layer:a}}=C((e=>({hovered:e.event.hovered,expanded:e.expanded}))),{hasChildCanvases:o}=__mf_29(((e,n)=>({hasChildCanvases:n.node(t).isParentOfTopLevelNodes()})));return R$2.createElement(K,{ref:a,expanded:n,hasCanvases:o,hovered:r},R$2.createElement(J,null),e?R$2.createElement(Q,{hasCanvases:o,className:"craft-layer-children"},e):null)},te=({children:e,options:t})=>{const n=__mf_40(D,{layers:{},events:{selected:null,dragged:null,hovered:null},options:{renderLayer:ee,...t}});return R$2.createElement(w.Provider,{value:{store:n}},R$2.createElement(B,null,e))},ne=({...e})=>R$2.createElement(te,{options:e},R$2.createElement(P,{id:__mf_28,depth:0}));

export { ee as DefaultLayer, J as DefaultLayerHeader, M as EditableLayerName, ne as Layers, C as useLayer };
