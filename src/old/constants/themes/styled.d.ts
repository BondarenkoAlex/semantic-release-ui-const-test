import { colorsType } from '../constants-typings';

declare module 'styled-components' {
	export interface DefaultTheme {
		background: string;
		color: {
			defaultText: string;
		}
		components: {
			Alert: {
				backgroundColor: string;
			};
			Button: {
				disabled: {
					backgroundColor: string;
					color: string;
					borderColor: string;
				};
			};
			ButtonIconCircle: {
				blue: {
					backgroundColor: string;
					boxShadow: string;
					hover: {
						boxShadow: string;
					};
					active: {
						backgroundColor: string;
						boxShadow: string;
					};
					iconColor: colorsType;
				};
				'light-blue': {
					backgroundColor: string;
					boxShadow: string;
					hover: {
						boxShadow: string;
					};
					active: {
						backgroundColor: string;
						boxShadow: string;
					};
					iconColor: colorsType;
				};
				gray: {
					backgroundColor: string;
					boxShadow: string;
					hover: {
						boxShadow: string;
					};
					active: {
						backgroundColor: string;
						boxShadow: string;
					};
					iconColor: colorsType;
				};
				beforeElement: {
					boxShadow: string;
					active: {
						boxShadow: string;
					};
				};
				disabled: {
					backgroundColor: string;
					iconColor: colorsType;
				};
			};
			Chip: {
				backgroundColor: string;
				hoverColor: string;
			};
			Checkbox: {
				default: {
					titleColor: string;
					borderColor: string;
					backgroundColor: string;
				};
				error: {
					borderColor: string;
					color: string;
				};
				checked: {
					backgroundColor: string;
					color: string;
					borderColor: string;
				};
				disabled: {
					backgroundColor: string;
					color: string;
					borderColor: string;
					titleColor: string;
				};
				hover: {
					default: {
						borderColor: string;
					};
					checked: {
						borderColor: string;
					};
				};
			};
			Link: {
				skin: ReadonlyArray;
				hover: ReadonlyArray;
				active: ReadonlyArray;
				disabled: ReadonlyArray;
				type: ReadonlyArray;
			};
			Radio: {
				color: string;
				borderColor: string;
				hoverBorderColor: string;
				checked: {
					backgroundColor: string;
					borderColor: string;
					beforeColor: string;
				};
				errorChecked: {
					backgroundColor: string;
					borderColor: string;
					beforeColor: string;
				};
				error: {
					backgroundColor: string;
					borderColor: string;
					beforeColor: string;
				};
				disabled: {
					backgroundColor: string;
					borderColor: string;
					beforeColor: string;
					textColor: string;
				};
				disabledChecked: {
					backgroundColor: string;
					borderColor: string;
					beforeColor: string;
				};
			};
			DefinitionList: {
				keyColor: string;
				valueColor: string;
			};
			Table: {
				textColor: string;
				headerColor: string;
			}
			Tooltip: {
				backgroundColor: string;
				textColor: string;
				textColorType: colorsType;
				iconColor: colorsType;
				headingColor: colorsType;
			};
			Tabs: {
				default: {
					color: string;
					borderColor: string;
					hoverItemColor: string;
					activeBorderColor: string;
				};
				disabled: {
					hoverItemColor: string;
				};
			};
			TextList: {
				default: {
					textColor: string;
					commentColor: string;
				};
			};
			IconButton: {
				default: {
					color: string;
					hover: {
						color: string;
					};
					active: {
						color: string;
					};
				};
			};
			DropdownButton: {
				default: {
					color: string;
					borderColor: string;
					backgroundColor: string;
					hover: {
						borderColor: string;
					};
					icon: {
						color: string;
						hover: {
							color: string;
						};
					};
				};
				gray: {
					color: string;
					borderColor: string;
					backgroundColor: string;
					hover: {
						color: string;
						borderColor: string;
					};
					icon: {
						color: string;
						hover: {
							color: string;
						};
					};
				};
				'dark-gray': {
					color: string;
					backgroundColor: string;
					hover: {
						borderColor: string;
					};
					icon: {
						color: string;
						hover: {
							color: string;
						};
					};
				};
				disabled: {
					hover: {
						borderColor: string;
					};
				};
				valid: {
					borderColor: string;
					hover: {
						borderColor: string;
					};
				};
				warning: {
					borderColor: string;
					hover: {
						borderColor: string;
					};
				};
				error: {
					borderColor: string;
					hover: {
						borderColor: string;
					}
				};
			};
		};
	}
}
