import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const style = {
    input: `block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:ring-0 focus:outline-none peer`,
    label: `peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`,
    // error: `text-xs text-red-400 invisible peer-focus:peer-invalid:visible`
    error: `text-xs text-red-400 hidden peer-focus:peer-invalid:inline`
}

const Input = (props) => {
	const {
		label,
		classnameforinput = "text-white border-gray-400 focus:border-white",
        classnameforlabel = "peer-focus:text-white text-gray-400",
        classnameforerror = "text-red-500",
        classnameforlength = 'text-gray-400',
        errormessage: errorMessage,
        ...otherProps
    } = props;
    const [focused, setFocused] = useState(false);

    function handleFocus(e) {
        setFocused(true);
    }
    
	return (
		<div className="relative z-0 mb-6 w-full flex flex-col group">
			<input
                className={`${style.input} ${classnameforinput}`}
                onBlur={handleFocus}
                focused={focused.toString()}
                placeholder=""
                {...otherProps}
			/>
			<label
				htmlFor={otherProps.id || otherProps.name}
				className={`${style.label} ${classnameforlabel}`}
			>
				{label}
            </label>
			{(!!errorMessage && !!otherProps.required) && <span className={`${style.error} ${classnameforerror} ${focused ? 'peer-invalid:inline':'hidden' }`}>{errorMessage}</span>}
            {otherProps.showlength && <span className={`absolute -bottom-5 right-0 peer-invalid:-bottom-1 text-xs ${classnameforlength}`}>{otherProps.value?.length}&nbsp;{otherProps.max ? `/ ${otherProps.max}` : null}</span>}
		</div>
	);
};

const TextArea = (props) => {
	const {
		label,
		classnameforinput = "text-white border-gray-400 focus:border-white",
        classnameforlabel = "peer-focus:text-white text-gray-400",
        classnameforerror = "text-red-500",
        classnameforlength = 'text-gray-400',
        errormessage: errorMessage,
        ...otherProps
    } = props;
    const [focused, setFocused] = useState(false);

    function handleFocus(e) {
        setFocused(true);
    }
    
	return (
		<div className="relative z-0 mb-6 w-full flex flex-col group">
			<textarea
                className={`${style.input} ${classnameforinput}`}
                onBlur={handleFocus}
                focused={focused.toString()}
                placeholder=""
                {...otherProps}
			/>
			<label
				htmlFor={otherProps.id || otherProps.name}
				className={`${style.label} ${classnameforlabel}`}
			>
				{label}
            </label>
			{(!!errorMessage && !!otherProps.required) && <span className={`${style.error} ${classnameforerror} ${focused ? 'peer-invalid:inline':'hidden' }`}>{errorMessage}</span>}
            {otherProps.showlength && <span className={`absolute -bottom-5 right-0 peer-invalid:-bottom-1 text-xs ${classnameforlength}`}>{otherProps.value?.length}&nbsp;{otherProps.max ? `/ ${otherProps.max}` : null}</span>}
		</div>
	);
};

export {Input, TextArea};

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string || PropTypes.number,
    max: PropTypes.number,
    classnameforinput : PropTypes.string,
    classnameforlabel : PropTypes.string,
    classnameforerror : PropTypes.string,
    classnameforlength : PropTypes.string,
    errormessage: PropTypes.string,
    onChange: PropTypes.func,
    showlength: PropTypes.bool
}

TextArea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string || PropTypes.number,
    max: PropTypes.number,
    classnameforinput : PropTypes.string,
    classnameforlabel : PropTypes.string,
    classnameforerror : PropTypes.string,
    classnameforlength : PropTypes.string,
    errormessage: PropTypes.string,
    onChange: PropTypes.func,
    showlength: PropTypes.bool
}