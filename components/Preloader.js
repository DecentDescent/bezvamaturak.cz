export default class Preloader extends React.Component {
  render() {
    return (
      <div className="preloader">
        <svg viewBox="0 0 208 64">
          <g fill="none" fillRule="evenodd">
            <path
              className="logo-fill"
              d="M75 25.993h4.026c1.868 0 3.218.272 4.05.816.832.544 1.248 1.404 1.248 2.58 0 .79-.204 1.45-.613 1.975-.408.526-.995.857-1.762.993v.093c.952.18 1.653.533 2.101 1.062.448.529.673 1.245.673 2.148 0 1.218-.426 2.172-1.276 2.862-.85.69-2.033 1.034-3.549 1.034H75V25.993zm2.217 5.603h2.134c.928 0 1.605-.147 2.032-.44.427-.294.64-.794.64-1.499 0-.637-.23-1.098-.691-1.382-.461-.285-1.192-.427-2.194-.427h-1.92v3.748zm0 1.8v4.295h2.357c.927 0 1.628-.177 2.101-.533.473-.356.71-.917.71-1.684 0-.705-.241-1.228-.724-1.568-.482-.34-1.215-.51-2.199-.51h-2.245zm17.998 6.16h-7.672V25.993h7.672v1.874H89.76v3.692h5.112v1.856H89.76v4.258h5.455v1.883zm11.458 0h-9.704v-1.54l6.837-10.121h-6.652v-1.902h9.333v1.558l-6.865 10.103h7.05v1.902zm10.13-13.563h2.301l-4.75 13.563h-2.337l-4.732-13.563h2.282l2.83 8.433c.148.402.306.92.473 1.554.167.634.275 1.105.325 1.415.08-.47.204-1.015.37-1.633.168-.619.304-1.076.41-1.373l2.829-8.396zm12.507 13.563l-1.355-3.766h-5.186l-1.327 3.766h-2.338l5.075-13.619h2.412l5.075 13.62h-2.356zm-1.94-5.678l-1.27-3.692a22.798 22.798 0 0 1-.385-1.169 25.276 25.276 0 0 1-.339-1.169c-.167.76-.411 1.593-.733 2.496l-1.225 3.534h3.953zm17.117 5.678l-5.056-12.524h-.074c.05.767.074 1.552.074 2.356v10.168h-.909V25.993h1.466l4.805 11.93h.056l4.806-11.93h1.428v13.563h-.955v-10.28c0-.717.037-1.459.111-2.226h-.074l-5.075 12.506h-.603zm16.32 0l-.233-1.596h-.074c-.507.65-1.028 1.11-1.563 1.378-.535.27-1.168.404-1.897.404-.99 0-1.76-.254-2.31-.761-.551-.507-.826-1.21-.826-2.106 0-.983.41-1.747 1.23-2.292.819-.544 2.005-.831 3.557-.862l1.92-.056v-.668c0-.959-.194-1.682-.584-2.17-.39-.49-1.018-.734-1.883-.734-.934 0-1.902.26-2.904.78l-.344-.798c1.108-.52 2.202-.78 3.285-.78 1.107 0 1.934.288 2.481.863.548.575.821 1.472.821 2.69v6.708h-.677zm-3.712-.65c1.076 0 1.925-.307 2.547-.922.621-.616.932-1.47.932-2.566v-.992l-1.762.074c-1.417.068-2.426.29-3.03.663-.603.375-.904.957-.904 1.75 0 .63.193 1.12.58 1.47.386.349.932.524 1.637.524zm10.317.02a6.89 6.89 0 0 0 1.521-.15v.743c-.445.148-.959.223-1.54.223-.89 0-1.548-.238-1.971-.715-.424-.476-.636-1.224-.636-2.245V30.27h-1.494v-.539l1.494-.417.464-2.282h.473v2.44h2.96v.798h-2.96v6.382c0 .773.136 1.346.408 1.717.272.37.7.556 1.28.556zm4.5-9.454v6.53c0 1.015.213 1.753.64 2.214.426.46 1.088.69 1.985.69 1.2 0 2.082-.302 2.648-.908.566-.607.85-1.593.85-2.96v-5.566h.908v10.084h-.779l-.167-1.391h-.056c-.655 1.051-1.821 1.577-3.497 1.577-2.295 0-3.442-1.228-3.442-3.683v-6.587h.91zm14.379-.195c.427 0 .884.043 1.373.13l-.176.881a5.373 5.373 0 0 0-1.308-.158c-.86 0-1.565.365-2.116 1.095-.55.73-.825 1.651-.825 2.765v5.566h-.919V29.472h.78l.092 1.818h.065c.415-.742.857-1.263 1.327-1.563.47-.3 1.039-.45 1.707-.45zm9.546 10.28l-.232-1.597h-.074c-.507.65-1.028 1.11-1.563 1.378-.535.27-1.167.404-1.897.404-.99 0-1.76-.254-2.31-.761s-.826-1.21-.826-2.106c0-.983.41-1.747 1.23-2.292.819-.544 2.005-.831 3.557-.862l1.92-.056v-.668c0-.959-.194-1.682-.584-2.17-.39-.49-1.017-.734-1.883-.734-.934 0-1.902.26-2.904.78l-.343-.798c1.107-.52 2.202-.78 3.284-.78 1.107 0 1.934.288 2.482.863.547.575.82 1.472.82 2.69v6.708h-.677zm-3.71-.65c1.076 0 1.925-.308 2.546-.923.622-.616.932-1.47.932-2.566v-.992l-1.762.074c-1.417.068-2.426.29-3.03.663-.602.375-.904.957-.904 1.75 0 .63.193 1.12.58 1.47.387.349.932.524 1.637.524zm-.186-11.012c.451-.49.898-1.02 1.34-1.592.443-.572.744-1.006.905-1.303h1.308v.158c-.223.321-.601.748-1.136 1.28a27.855 27.855 0 0 1-1.768 1.605h-.65v-.148zm8.74 7.236l5.148-5.66h1.113l-3.97 4.305 4.314 5.78h-1.104l-3.832-5.093-1.651 1.503v3.59h-.919V25.121h.919v7.236l-.065 2.774h.046z"
            />
            <g transform="translate(0 3)">
              <circle
                cx="29"
                cy="29"
                r="27.5"
                className="logo-stroke"
                strokeWidth="3"
              />
              <path
                className="logo-fill"
                d="M55.476 59.354c-.156.878-.584 1.336-1.284 1.336-.467 0-.894-.23-1.245-.61-2.256-2.788-3.812-8.095-4.629-15.96-.233-2.024-.583-5.078-1.05-9.126-.856 1.871-2.023 5.193-3.54 9.927-.39 1.184-.7 2.177-.895 2.94-.117.497-.233.955-.311 1.413-.234.458-.584.687-1.05.687-1.323 0-3.19-2.367-5.525-7.178-1.244-2.443-2.373-5.612-3.306-9.507-1.05 2.902-1.75 5.727-2.101 8.553-.389 2.596-.545 5.956-.545 10.08 0 1.603-.466 2.367-1.322 2.367-1.128 0-1.673-1.91-1.673-5.804 0-1.107.117-3.016.428-5.689.233-2.176.389-3.97.389-5.421 0-.268 1.806-6.01 2.117-5.628.817-2.482 1.423-1.436 2.045-2.2.234-.343.623-.534 1.09-.534.583 0 1.05.725 1.439 2.176 1.712 7.178 3.812 12.294 6.302 15.349 1.478-4.964 3.112-9.393 4.902-13.325.622-1.336 1.206-2.024 1.75-2.024.934 0 1.595 1.222 1.945 3.666.234 1.756.584 4.085 1.012 7.063.467 4.162.778 6.644.933 7.445.506 2.978 1.245 5.307 2.218 7.026.544.152.972.61 1.245 1.336 0 .076.155.344.389.84.155.382.272.649.272.802z"
              />
              <path
                className="logo-fill"
                d="M37 26.257c0 1.419-.33 2.513-.91 3.284-1.364 1.702-3.72 3.162-7.11 4.378-1.53.567-4.34 1.378-8.391 2.473-1.571.405-2.522.608-2.77.608-.248 0-.496-.122-.744-.324-.33-.244-.496-.527-.496-.892 0-.73.29-1.176.95-1.379l1.943-.486c0-.243 0-2.635.042-7.135V18.23c0-1.703.041-4.42.165-8.23l-2.19.203c-.993 0-1.489-.406-1.489-1.257 0-.527.124-.851.372-1.014.207-.162.62-.243 1.282-.324C22.738 7.203 26.128 7 27.78 7c1.82 0 3.349.324 4.548.932 1.53.811 2.315 2.109 2.315 3.811 0 2.595-3.349 5.676-10.004 9.325 3.472.162 5.953.446 7.482.81C35.346 22.73 37 24.19 37 26.257zm-5-13.93C32 10.776 30.481 10 27.443 10c-1.94 0-3.713.082-5.316.163A117.369 117.369 0 0 0 22 15.388V20c6.667-3.224 10-5.796 10-7.673zm2 14.265c0-1.633-1.6-2.612-4.72-2.939L22 23v10c8-2.082 12-4.204 12-6.408z"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
