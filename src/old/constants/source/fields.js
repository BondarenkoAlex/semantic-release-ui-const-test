const colors = require('./colors');
const fieldSizes = require('./field-sizes');
const indents = require('./indents');
const text = require('./text');

module.exports = {
	labelText: {
		bottomIndent: indents.indentXS,
		sizes: {
			medium: {
				fontSize: text.fontSize7,
				lineHeight: text.lineHeight7,
			},
			large: {
				fontSize: text.fontSize6,
				lineHeight: text.lineHeight6,
			},
		},
		themes: {
			light: {
				default: colors.silverStrong,
				disabled: colors.silverTrans7,
			},
		},
	},
	// подсказка под полем, текст об ошибке
	bottomTextHint: {
		topIndent: indents.indentXS,
		fontSize: text.fontSize7,
		lineHeight: text.lineHeight7,
		themes: {
			light: {
				default: colors.minorBlackLighten,
				error: colors.majorRed,
				valid: colors.majorGreen,
				warning: colors.majorYellow,
				disabled: colors.silverTrans7,
			},
			dark: {
				default: colors.whiteTrans7,
				disabled: colors.whiteTrans2,
			},
		},
	},
	field: {
		themes: {
			light: {
				default: {
					borderColor: colors.minorGrayLighten,
					color: colors.minorDarkBlue,
					labelColor: colors.minorBlackLighten,
					backgroundColor: colors.majorWhite,
					disabledColor: colors.silverTrans7,
					disabledBackgroundColor: colors.whiteTrans2,
					disabledBorderColor: colors.grayTrans1,
				},
				filled: {
					backgroundColor: colors.blueGray40,
					borderColor: colors.minorGrayLighten2,
					borderColorSecond: colors.majorBlue,
					labelColor: colors.silverStrong,
					disabledBackgroundColor: colors.blueGray40,
					disabledBorderColor: colors.blueGray40,
				},
				error: {
					borderColor: colors.majorRed,
				},
				hovered: {
					borderColor: colors.majorBlue,
				},
				placeholder: {
					color: colors.majorGray,
					disabledColor: colors.silverTrans7,
				},
				focus: {
					borderColor: colors.majorBlue,
				},
			},
			dark: {},
		},
		size: {
			h56: {
				height: fieldSizes.h56,
				fontSize: text.fontSize5,
				lineHeight: text.lineHeight5,
				paddingTop: indents.indentM,
				paddingBottom: indents.indentXS,
				paddingLeft: indents.indentS,
				paddingRight: indents.indentS,
			},
			h48: {
				height: fieldSizes.h48,
				fontSize: text.fontSize4,
				lineHeight: text.lineHeight4,
				paddingTop: `${
					(parseInt(fieldSizes.h48, 10) - 2 - parseInt(text.lineHeight4, 10)) / 2
				}px`,
				paddingBottom: `${
					(parseInt(fieldSizes.h48, 10) - 2 - parseInt(text.lineHeight4, 10)) / 2
				}px`,
				paddingLeft: indents.indentS,
				paddingRight: indents.indentS,
			},
			h40: {
				height: fieldSizes.h40,
				fontSize: text.fontSize5,
				lineHeight: text.lineHeight5,
				paddingTop: `${
					(parseInt(fieldSizes.h40, 10) - 2 - parseInt(text.lineHeight5, 10)) / 2
				}px`,
				paddingBottom: `${
					(parseInt(fieldSizes.h40, 10) - 2 - parseInt(text.lineHeight5, 10)) / 2
				}px`,
				paddingLeft: indents.indentS,
				paddingRight: indents.indentS,
			},
		},
	},
};
