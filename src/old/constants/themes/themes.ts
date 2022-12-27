import {
	linkHover,
	linkActive,
	linkDisabled,
	linkDisabledDark,
	linkType,
	linkTypeDark,
	linkActiveDark,
	linkHoverDark,
	linkSkin,
	linkSkinDark,
} from './link';
import colors from '../source/colors';

const defaultTheme = {
	background: 'transparent',
	color: {
		defaultText: colors.minorDarkBlue,
	},
	components: {
		Alert: {
			backgroundColor: colors.majorWhite,
		},
		Button: {
			disabled: {
				backgroundColor: colors.grayTrans1,
				color: colors.grayTrans3,
				borderColor: 'transparent',
			},
		},
		ButtonIconCircle: {
			blue: {
				backgroundColor: colors.majorBlue,
				boxShadow: 'none',
				hover: {
					boxShadow: 'none',
				},
				active: {
					backgroundColor: colors.minorDarkBlue2,
					boxShadow: 'none',
				},
				iconColor: 'majorWhite',
			},
			'light-blue': {
				backgroundColor: colors.minorBlueLighten,
				boxShadow: 'none',
				hover: {
					boxShadow: 'none',
				},
				active: {
					backgroundColor: colors.minorBlueLighten,
					boxShadow: 'none',
				},
				iconColor: 'majorBlue',
			},
			gray: {
				backgroundColor: '0',
				boxShadow: `0 0 0 1px ${colors.minorGrayLighten}`,
				hover: {
					boxShadow: `0 0 0 1px ${colors.minorLightBlue}`,
				},
				active: {
					backgroundColor: '0',
					boxShadow: `0 0 0 1px ${colors.minorBlue}`,
				},
				iconColor: 'majorGray',
			},
			beforeElement: {
				boxShadow: `0 0 0 2px ${colors.minorLightBlue}`,
				active: {
					boxShadow: `0 0 0 2px ${colors.minorBlue}`,
				},
			},
			disabled: {
				backgroundColor: colors.grayTrans1,
				iconColor: 'grayTrans3',
			},
		},
		Chip: {
			backgroundColor: colors.majorGray,
			hoverColor: colors.silverTrans7,
		},
		Checkbox: {
			default: {
				titleColor: '',
				borderColor: colors.silverTrans7,
				backgroundColor: colors.majorWhite,
			},
			error: {
				borderColor: colors.majorRed,
				color: colors.majorWhite,
			},
			checked: {
				backgroundColor: colors.majorBlue,
				color: colors.majorWhite,
				borderColor: colors.majorBlue,
			},
			disabled: {
				backgroundColor: colors.whiteTrans2,
				color: colors.grayTrans3,
				borderColor: colors.grayTrans1,
				titleColor: colors.grayTrans1,
			},
			hover: {
				default: {
					borderColor: colors.majorGray,
				},
				checked: {
					borderColor: colors.majorBlue,
				},
			},
		},
		Link: {
			skin: linkSkin,
			hover: linkHover,
			active: linkActive,
			disabled: linkDisabled,
			type: linkType,
		},
		Radio: {
			color: colors.majorBlack,
			borderColor: colors.silverTrans7,
			hoverBorderColor: colors.majorGray,
			checked: {
				backgroundColor: colors.majorBlue,
				borderColor: colors.majorBlue,
				beforeColor: colors.majorWhite,
			},
			error: {
				backgroundColor: 'transparent',
				borderColor: colors.majorRed,
				beforeColor: 'transparent',
			},
			errorChecked: {
				backgroundColor: colors.majorRed,
				borderColor: colors.majorRed,
				beforeColor: colors.majorWhite,
			},
			disabled: {
				backgroundColor: 'transparent',
				borderColor: colors.grayTrans1,
				beforeColor: 'transparent',
				textColor: colors.grayTrans2,
			},
			disabledChecked: {
				backgroundColor: 'transparent',
				borderColor: colors.grayTrans1,
				beforeColor: colors.grayTrans1,
			},
		},
		DefinitionList: {
			keyColor: colors.minorBlackLighten,
			valueColor: colors.majorBlack,
		},
		Table: {
			textColor: colors.majorBlack,
			headerColor: colors.silverStrong
		},
		Tooltip: {
			backgroundColor: colors.majorWhite,
			textColor: colors.majorBlack,
			textColorType: 'majorBlack',
			iconColor: 'silverTrans7',
			headingColor: 'majorBlack',
		},
		Tabs: {
			default: {
				color: colors.majorBlack,
				borderColor: colors.minorGrayLighten,
				hoverItemColor: colors.minorBlue,
				activeBorderColor: colors.majorDarkBlue,
			},
			disabled: {
				hoverItemColor: colors.majorBlack,
			},
		},
		TextList: {
			default: {
				textColor: colors.minorDarkBlue,
				commentColor: colors.silverStrong,
			},
		},
		IconButton: {
			default: {
				color: colors.silverTrans7,
				hover: {
					color: colors.majorGray,
				},
				active: {
					color: colors.majorGray,
				}
			}
		},
		DropdownButton: {
			default: {
				color: colors.majorBlack,
				borderColor: colors.minorGrayLighten,
				backgroundColor: 'initial',
				hover: {
					borderColor: colors.majorBlue,
				},
				icon: {
					color: colors.silverTrans7,
					hover: {
						color: colors.majorGray,
					},
				},
			},
			gray: {
				color: colors.majorBlack,
				borderColor: colors.minorGrayLighten2,
				backgroundColor: colors.blueGray40,
				hover: {
					color: colors.minorDarkBlue,
					borderColor: colors.majorBlue,
				},
				icon: {
					color: colors.minorDarkBlue,
					hover: {
						color: colors.minorDarkBlue,
					},
				},
			},
			'dark-gray': {
				color: colors.majorWhite,
				backgroundColor: colors.silverStrong,
				hover: {
					borderColor: colors.majorBlue,
				},
				icon: {
					color: colors.majorWhite,
					hover: {
						color: colors.majorGray,
					},
				},
			},
			disabled: {
				hover: {
					borderColor: colors.grayTrans1,
				},
			},
			valid: {
				borderColor: colors.majorGreen,
				hover: {
					borderColor: colors.majorGreen,
				},
			},
			warning: {
				borderColor: colors.majorOrange,
				hover: {
					borderColor: colors.majorOrange,
				},
			},
			error: {
				borderColor: colors.majorRed,
				hover: {
					borderColor: colors.majorRed,
				},
			},
		},
	},
} as const;

const darkTheme = {
	background: colors.majorDarkBlue,
	color: {
		defaultText: colors.majorWhite,
	},
	components: {
		Alert: {
			backgroundColor: colors.minorBlackLighten2,
		},
		Button: {
			disabled: {
				backgroundColor: colors.whiteTrans2,
				color: colors.whiteTrans2,
				borderColor: 'transparent',
			},
		},
		ButtonIconCircle: {
			blue: {
				backgroundColor: colors.majorWhite,
				boxShadow: 'none',
				hover: {
					boxShadow: 'none',
				},
				active: {
					backgroundColor: colors.minorGrayLighten2,
					boxShadow: 'none',
				},
				iconColor: 'majorGray',
			},
			'light-blue': {
				backgroundColor: colors.majorWhite,
				boxShadow: 'none',
				hover: {
					boxShadow: 'none',
				},
				active: {
					backgroundColor: colors.minorGrayLighten2,
					boxShadow: 'none',
				},
				iconColor: 'majorGray',
			},
			gray: {
				backgroundColor: '0',
				boxShadow: `0 0 0 1px ${colors.whiteTrans2}`,
				hover: {
					boxShadow: `0 0 0 1px ${colors.majorWhite}`,
				},
				active: {
					backgroundColor: colors.whiteTrans2,
					boxShadow: `0 0 0 1px ${colors.majorWhite}`,
				},
				iconColor: 'majorWhite',
			},
			beforeElement: {
				boxShadow: `0 0 0 2px ${colors.majorWhite}`,
				active: {
					boxShadow: `0 0 0 2px ${colors.majorWhite}`,
				},
			},
			disabled: {
				backgroundColor: colors.whiteTrans2,
				iconColor: 'whiteTrans2',
			},
		},
		Chip: {
			backgroundColor: colors.whiteTrans2,
			hoverColor: colors.whiteTrans4,
		},
		Checkbox: {
			default: {
				titleColor: colors.majorWhite,
				borderColor: colors.whiteTrans7,
				backgroundColor: 'transparent',
			},
			error: {
				borderColor: colors.majorRed,
				color: colors.majorWhite,
			},
			checked: {
				color: colors.majorBlue,
				backgroundColor: colors.majorWhite,
				borderColor: colors.majorWhite,
			},
			disabled: {
				backgroundColor: 'transparent',
				color: colors.whiteTrans2,
				borderColor: colors.whiteTrans2,
				titleColor: colors.whiteTrans2,
			},
			hover: {
				default: {
					borderColor: colors.majorWhite,
				},
				checked: {
					borderColor: colors.majorWhite,
				},
			},
		},
		Link: {
			skin: linkSkinDark,
			hover: linkHoverDark,
			active: linkActiveDark,
			disabled: linkDisabledDark,
			type: linkTypeDark,
		},
		Radio: {
			color: colors.majorWhite,
			borderColor: colors.whiteTrans7,
			hoverBorderColor: colors.majorWhite,
			checked: {
				backgroundColor: 'transparent',
				borderColor: colors.whiteTrans2,
				beforeColor: colors.whiteTrans2,
			},
			error: {
				backgroundColor: 'transparent',
				borderColor: colors.majorRed,
				beforeColor: 'transparent',
			},
			errorChecked: {
				backgroundColor: colors.majorRed,
				borderColor: colors.majorRed,
				beforeColor: colors.majorWhite,
			},
			disabled: {
				backgroundColor: colors.whiteTrans2,
				borderColor: 'transparent',
				beforeColor: 'transparent',
				textColor: colors.whiteTrans2,
			},
			disabledChecked: {
				backgroundColor: 'transparent',
				borderColor: colors.whiteTrans2,
				beforeColor: colors.whiteTrans2,
			},
		},
		DefinitionList: {
			keyColor: colors.whiteTrans7,
			valueColor: colors.majorWhite,
		},
		Table: {
			textColor: colors.majorWhite,
			headerColor: colors.whiteTrans7
		},
		Tooltip: {
			backgroundColor: colors.majorDarkBlue,
			textColor: colors.whiteTrans94,
			textColorType: 'whiteTrans94',
			iconColor: 'majorWhite',
			headingColor: 'majorWhite',
		},
		Tabs: {
			default: {
				color: colors.majorWhite,
				borderColor: colors.whiteTrans2,
				hoverItemColor: colors.minorLightBlue,
				activeBorderColor: colors.minorYellow,
			},
			disabled: {
				hoverItemColor: colors.majorWhite,
			},
		},
		TextList: {
			default: {
				textColor: colors.majorWhite,
				commentColor: colors.minorGrayLighten,
			},
		},
		IconButton: {
			default: {
				color: colors.whiteTrans4,
				hover: {
					color: colors.majorWhite,
				},
				active: {
					color: colors.majorWhite,
				}
			}
		},
		DropdownButton: {
			default: {
				color: colors.majorBlack,
				borderColor: colors.minorGrayLighten,
				backgroundColor: 'initial',
				hover: {
					borderColor: colors.majorBlue,
				},
				icon: {
					color: colors.silverTrans7,
					hover: {
						color: colors.majorGray,
					},
				},
			},
			gray: {
				color: colors.majorBlack,
				borderColor: colors.minorGrayLighten2,
				backgroundColor: colors.minorGrayLighten2,
				hover: {
					color: colors.minorDarkBlue,
					borderColor: colors.majorBlue,
				},
				icon: {
					color: colors.minorDarkBlue,
					hover: {
						color: colors.minorDarkBlue,
					},
				},
			},
			'dark-gray': {
				color: colors.majorWhite,
				backgroundColor: colors.silverStrong,
				hover: {
					borderColor: colors.majorBlue,
				},
				icon: {
					color: colors.majorWhite,
					hover: {
						color: colors.majorGray,
					},
				},
			},
			disabled: {
				hover: {
					borderColor: colors.grayTrans1,
				},
			},
			valid: {
				borderColor: colors.majorGreen,
				hover: {
					borderColor: colors.majorGreen,
				},
			},
			warning: {
				borderColor: colors.majorOrange,
				hover: {
					borderColor: colors.majorOrange,
				},
			},
			error: {
				borderColor: colors.majorRed,
				hover: {
					borderColor: colors.majorRed,
				},
			},
		},
	},
} as const;

export { defaultTheme, darkTheme };
