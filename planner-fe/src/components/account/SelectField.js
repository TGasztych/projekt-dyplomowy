import React from 'react';
import Select from 'react-select';

export const SelectField = ({options, valueMap, labelMap, field, form}) => {
    function mapOption(option) {
        return {
            value: valueMap(option),
            label: labelMap(option),
        }
    }

    return <Select
        options={options.map(mapOption)}
        onChange={(option) => form.setFieldValue(field.name, option.value)}
    />
};
