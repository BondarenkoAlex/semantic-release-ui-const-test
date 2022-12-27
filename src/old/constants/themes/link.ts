import colors from '../source/colors';

type TLinkSkins = 'default' | 'alt' | 'minor';
type TLinkTypes = 'default' | 'text' | 'pseudo';
type ILinkSkinsKeys = TLinkSkins | 'hover' | 'active';

interface ILinkSkins {
	light: Record<ILinkSkinsKeys, string>;
	dark: Record<ILinkSkinsKeys, string>;
}

export const linkSkins: ILinkSkins = {
	light: {
		default: colors.minorDarkBlue,
		alt: colors.majorBlue,
		minor: colors.silverStrong,
		hover: colors.minorBlue,
		active: colors.minorDarkBlue2,
	},
	dark: {
		default: colors.majorWhite,
		alt: colors.minorBlue,
		minor: colors.whiteTrans6,
		hover: colors.minorLightBlue,
		active: colors.majorBlue,
	},
};

export const linkTransitionTime = '0.2s';

type TLinkTypesStyles = Record<
	TLinkTypes,
	{
		border: string;
		disabled: string;
	}
>;

type TLinkCurrentTypes = Omit<TLinkTypesStyles, 'default'>;

const linkTypes: {
	light: TLinkCurrentTypes;
	dark: TLinkCurrentTypes;
} = {
	light: {
		text: {
			border: `border-bottom: 1px solid ${colors.majorBlue}`,
			disabled: 'border-color: 1px solid currentColor',
		},
		pseudo: {
			border: `border-bottom: 1px dashed ${colors.majorBlue}`,
			disabled: 'border-bottom: 1px dashed currentColor',
		},
	},
	dark: {
		text: {
			border: 'border-bottom: 1px solid currentColor',
			disabled: 'border-bottom: 1px solid currentColor',
		},
		pseudo: {
			border: 'border-bottom: 1px dashed currentColor',
			disabled: 'border-bottom: 1px dashed currentColor',
		},
	},
};

export const linkBase = () => `
	color: inherit;
	font-size: inherit;
	font-weight: inherit;
	text-decoration: none;
	border: 0;
	padding: 0;
	background: 0;
	outline: 0;
	cursor: pointer;
	user-select: none;
	appearance: none;
	transition: all ${linkTransitionTime};

	> * {
		transition: all ${linkTransitionTime};
	}
`;

export const linkSkin = (skin: TLinkSkins = 'default') => `
	color: ${linkSkins.light[skin]};
`;

export const linkSkinDark = (skin: TLinkSkins = 'default') => `
	color: ${linkSkins.dark[skin]};
`;

export const linkHover = () => `
	color: ${linkSkins.light.hover};
	border-color: currentColor;
`;

export const linkActive = () => `
	color: ${linkSkins.light.active};
	border-color: currentColor;
`;

export const linkInteractive = () => `
	&:hover {
		${linkHover}
	}

	&:active {
		${linkActive}
	}
`;

export const linkHoverDark = () => `
	color: ${linkSkins.dark.hover};
	border-color: currentColor;
`;

export const linkActiveDark = () => `
	color: ${linkSkins.dark.active};
	border-color: currentColor;
`;

export const linkInteractiveDark = () => `
	&:hover {
		${linkHoverDark}
	}

	&:active {
		${linkActiveDark}
	}
`;

export const linkDisabled = () => `
	color: ${colors.silverTrans7};
	border-color: currentColor;
	pointer-events: none;
`;

export const linkDisabledDark = () => `
	color: ${colors.whiteTrans2};
	border-color: currentColor;
	pointer-events: none;
`;

export const linkType = (type: TLinkTypes, isDisabled: boolean = false) => {
	if (type !== 'default') {
		return `
			${linkTypes.light[type][isDisabled ? 'disabled' : 'border']}
		`;
	}
};

export const linkTypeDark = (type: TLinkTypes, isDisabled: boolean = false) => {
	if (type !== 'default') {
		return `
			${linkTypes.dark[type][isDisabled ? 'disabled' : 'border']}
		`;
	}
};
