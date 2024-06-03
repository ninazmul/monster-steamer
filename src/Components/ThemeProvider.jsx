import { useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <div className="bg-white text-[#153339] dark:text-teal-200 dark:bg-[rgb(8,7,39)] ">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;
