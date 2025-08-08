import React from "react";
import AutoChangingText from "../components/AutoChangingText";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { pathname } = useLocation();
  const style = {
    fontFamily: "'Poppins', sans-serif",
  };

  const style2 = {
    fontFamily: "'Poppins', cursive",
  };

  return (
    <div className="container">
      {/* image  */}
      <div className="content flex flex-col justify-center items-center mt-10 ">
        <p style={style2} className="fs-6">
          "Learn. Build. Break. Repeat."
        </p>
        <div className="image rounded-full overflow-hidden flex justify-center items-center h-55 w-55 mx-auto">
          <img src="/sujan.gif" alt="" />
        </div>
        <h1 style={style}>Sujan Tamang</h1>
        <p className="italic text-sm"> &lt; My Comfy Place. 127.0.0.1 /&gt;</p>
      </div>

      {/* auto changing text */}
      <div className="border-t-2 border-gray-300 mt-2" style={style2}>
        <AutoChangingText />
      </div>

      {/* social links */}
      {pathname !== "/" && (
        <motion.div
          className="flex justify-center items-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="h-8 w-8 mx-2">
            <Link
              to="https://www.linkedin.com/in/sujantamang80"
              target="_blank"
            >
              <img src="/socials/linkedin.png" alt="linkend" />{" "}
            </Link>
          </div>

          <div className="h-8 w-8 mx-2">
            <Link
              to="https://www.instagram.com/s_u_z_a_n_y_b_a/?hl=en"
              target="_blank"
            >
              <img src="/socials/instagram.png" alt="ig" />{" "}
            </Link>
          </div>

          <div className="h-8 w-8 mx-2">
            <Link to="https://discord.gg/WfCKBPP3" target="_blank">
              <img src="/socials/discord.png" alt="dc" />{" "}
            </Link>
          </div>

          <div className="h-8 w-8 mx-2">
            <Link to="https://www.youtube.com/@SuZan_Yba" target="_blank">
              <img src="/socials/youtube.png" alt="yt" />{" "}
            </Link>
          </div>

          <div className="h-8 w-8 mx-2">
            <Link to="https://github.com/ST079" target="_blank">
              <img src="/socials/github.png" alt="yt" />{" "}
            </Link>
          </div>

          <div className="h-8 w-8 mx-2">
            <Link to="https://www.facebook.com/suzanyba082" target="_blank">
              <img src="/socials/facebook.png" alt="fb" />{" "}
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Sidebar;
