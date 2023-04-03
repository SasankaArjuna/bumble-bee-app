const formValidator = async (data: {[key: string]: any}): Promise<[any, boolean]> => {
    let isValid = true
    let validatedData = data
    return new Promise((resolve) => {
        for (const [field, fieldData] of Object.entries(data)) {
            if (fieldData.validator === 'text') {
                let error = null
                if (fieldData.isRequired && !fieldData.value) {
                    error = 'This field is required.'
                    isValid = false
                }
                validatedData = {
                    ...validatedData,
                    [field]: {
                        ...fieldData as {},
                        error: error
                    }
                }
            }

            if (fieldData.validator === 'number') {
                let error = null
                if (fieldData.isRequired && !isNaN(fieldData.value)) {
                    error = 'A valid number is required.'
                    isValid = false
                }
                validatedData = {
                    ...validatedData,
                    [field]: {
                        ...fieldData as {},
                        error: error
                    }
                }
            }

            if (fieldData.validator === 'boolean') {
                let error = null
                if (fieldData.isRequired && typeof fieldData.value !== 'boolean') {
                    error = 'A valid boolean is required.'
                    isValid = false
                }
                validatedData = {
                    ...validatedData,
                    [field]: {
                        ...fieldData as {},
                        error: error
                    }
                }
            }

            if (fieldData.validator === 'array') {
                let error = null
                if (!!fieldData.value && fieldData.value.length === 0 && fieldData.isRequired) {
                    error = 'This field is required.'
                    isValid = false
                }
                validatedData = {
                    ...validatedData,
                    [field]: {
                        ...fieldData as {},
                        error: error
                    }
                }
            }

            if (fieldData.validator === 'email') {
                let error = null
                if (fieldData.isRequired && !fieldData.value) {
                    error = 'This field is required.'
                    isValid = false
                }
                if (fieldData.value) {
                    const lastAtPos = fieldData.value.lastIndexOf('@')
                    const lastDotPos = fieldData.value.lastIndexOf('.')
                    if (
                        !(
                            lastAtPos < lastDotPos && lastAtPos > 0 &&
                            fieldData.value.indexOf('@@') === -1 &&
                            lastDotPos > 2 && (fieldData.value.length - lastDotPos
                            ) > 2)
                    ) {
                        isValid = false
                        error = 'Email is not valid'
                    }
                }
                validatedData = {
                    ...validatedData,
                    [field]: {
                        ...fieldData as {},
                        error: error
                    }
                }
            }

            if (fieldData.validator === 'object') {
                let error = null
                if (
                    fieldData.isRequired &&
                    (
                        !fieldData.value ||
                        (!!fieldData.value && Object.keys(fieldData.value).length === 0 && fieldData.value.constructor === Object)
                    )
                ) {
                    error = 'This field is required.'
                    isValid = false
                }
                validatedData = {
                    ...validatedData,
                    [field]: {
                        ...fieldData as {},
                        error: error
                    }
                }
            }
        }
        resolve([validatedData, isValid])
    })
}
export default formValidator
