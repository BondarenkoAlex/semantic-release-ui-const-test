/*
Colors
https://www.figma.com/file/I2NHWYku0ymUrxxTwLcH7j/Banki-UI-Color-Palette?node-id=386%3A43
*/

const HEXToRGB = color => {
	const r = parseInt(color.substring(1, 3), 16);
	const g = parseInt(color.substring(3, 5), 16);
	const b = parseInt(color.substring(5, 7), 16);

	return `${r}, ${g}, ${b}`;
};

const COLORS = {
	black: '#000000',
	majorBlack: '#212121',
	minorBlackLighten: '#747474',
	minorBlackLighten2: '#F5F5F5',
	silverStrong: '#687082',
	majorGray: '#A4A9B5',
	minorGrayLighten: '#D6D9E0',
	minorGrayLighten2: '#ECEFF1',
	majorBlue: '#039BE5',
	minorBlue: '#29B6F6',
	minorBlueDark900: '#223046',
	minorLightBlue: '#A0D4FA',
	minorBlueLighten: '#DAEEFF',
	minorDarkBlue: '#162136',
	minorDarkBlue2: '#0288D1',
	majorDarkBlue: '#28467F',
	minorOrange: '#F48100',
	majorOrange: '#FE9E00',
	orangeYellow: '#FFF9E7',
	majorYellow: '#FFC92E',
	minorYellow: '#FFEB3B',
	minorYellow2: '#FCE87F',
	minorYellow50: '#FFF598',
	majorAmber700: '#FFB300',
	majorGreen: '#1BAF5D',
	minorGreen: '#2ECC71',
	minorGreen600: '#179951',
	minorGreen10: '#C1F6D9',
	greenLight: '#D1FFC3',
	majorRed: '#EF2D1D',
	majorRed800: '#DB1F0F',
	majorRed500: '#F36155',
	minorRed10: '#FEEBEA',
	pinkLight: '#FFD8D9',
	majorPurple: '#AE44BE',
	majorWhite: '#FFFFFF',
	blueGray40: '#F4F5F8',
	green100: '#59E899',
	green10: '#DBFAE8',
};

const BLACK_TRANS = {
	blackTrans08: `rgba(${HEXToRGB(COLORS.black)}, 0.08)`,
	blackTrans16: `rgba(${HEXToRGB(COLORS.black)}, 0.16)`,
	blackTrans64: `rgba(${HEXToRGB(COLORS.black)}, 0.64)`,
};

const GRAY_TRANS = {
	grayTrans1: `rgba(${HEXToRGB(COLORS.majorBlack)}, 0.12)`,
	grayTrans2: `rgba(${HEXToRGB(COLORS.majorBlack)}, 0.24)`,
	grayTrans3: `rgba(${HEXToRGB(COLORS.majorBlack)}, 0.34)`,
};

const WHITE_TRANS = {
	whiteTrans2: `rgba(${HEXToRGB(COLORS.majorWhite)}, 0.2)`,
	whiteTrans4: `rgba(${HEXToRGB(COLORS.majorWhite)}, 0.4)`,
	whiteTrans6: `rgba(${HEXToRGB(COLORS.majorWhite)}, 0.6)`,
	whiteTrans7: `rgba(${HEXToRGB(COLORS.majorWhite)}, 0.7)`,
	whiteTrans94: `rgba(${HEXToRGB(COLORS.majorWhite)}, 0.94)`,
};

const GREEN_TRANS = {
	greenTrans6: `rgba(${HEXToRGB(COLORS.majorGreen)}, 0.6)`,
};

const SILVER_TRANS = {
	silverTrans7: `rgba(${HEXToRGB(COLORS.majorGray)}, 0.7)`,
};

module.exports = {
	...COLORS,
	...BLACK_TRANS,
	...GRAY_TRANS,
	...WHITE_TRANS,
	...GREEN_TRANS,
	...SILVER_TRANS,
};
