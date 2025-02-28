
export const validateEmail = (value) => {
    // Simple regex for email validation
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
      return "Invalid email address";
    return undefined;
  };
  
  export const validateUsername = (value) => {
    if (!value) return "Username is required";
    return undefined;
  };
  
  export const validatePassword = (value) => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    return undefined;
  };
  
  export const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword) return "Confirm Password is required";
    if (confirmPassword !== password) return "Passwords do not match";
    return undefined;
  };
  