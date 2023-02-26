import React from "react";
import css from "./Footer.module.css";
import logo from "../../assets/logo.png";

import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";

export default function Footer() {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={logo} alt="" />
          <span>Hagzon</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando, Fl 32801</span>
            </span>

            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:352-3006-4415">352-3006-4415</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:support@hagzon.com">support@hagzon.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign In</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UserIcon className={css.icon} />
              <span>About Us</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Safwety Privacy & Terms</span>
            </span>
          </div>
        </div>

      </div>

      <div className={css.copyRight}>
        <span>Copyright &copy; 2022 by Hagzon, Inc.</span>
        <span>All rights reserved.</span>
      </div>

    </div>
  );
}
