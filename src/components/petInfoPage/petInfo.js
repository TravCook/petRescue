import React from "react"
import testPic from "../../public/images/IMG_1438.JPG"

function petInfo() {
  return(
    <div>
      <form className="grid grid-cols-3 grid-rows-3 gap-4 p-2 mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="col-auto row-auto">
          <img src={testPic} />
        </div>
        <div className="col-auto row-auto">
          <div className="grid grid-rows-3 gap-2">
            <div className="row-auto">
              <label for="petName">NAME:</label>
              <input className="border-2 border-black" type="text" id="petName" name="petName" />
            </div>
            <div className="row-auto">
              <label for="petBreed">BREED:</label>
              <input className="border-2 border-black" type="text" id="petBreed" name="petBreed" />
            </div>
            <div className="row-auto">
              <label for ="petKennel">KENNEL: </label><br></br>
              <select className="border-2 border-black" id="petKennel" name="petKennel">
                <option value="Kennel 1">Kennel 1</option>
                <option value="Kennel 2">Kennel 2</option>
                <option value="Kennel 3">Kennel 3</option>
                <option value="Kennel 4">Kennel 4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-auto row-auto">
          <div className="grid grid-rows-3 gap-2">
            <div className="row-auto">
              <label for="petFood">FOOD:</label>
              <input className="border-2 border-black" type="text" id="petFood" name="petFood" />
            </div>
            <div className="row-auto">
              <label for="petPlaytime">PLAYTIME:</label>
              <input className="border-2 border-black" type="text" id="petPlaytime" name="petPlaytime" />
            </div>
            <div className="row-auto">
              <label for="petMeds">MEDICINE:</label>
              <input className="border-2 border-black" type="text" id="petMeds" name="petMeds" />
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-3 row-start-2">
          <label for="playPrefs">Preferences for Play:</label><br></br>
          <textarea id="playPrefs" name="playPrefs" rows="4" cols="60"></textarea>
        </div>
        <div className="col-start-1 col-end-3 row-start-3">
          <label for="playFlags">Red Flags to be aware of:</label><br></br>
          <textarea id="playFlags" name="playFlags" rows="4" cols="60"></textarea>
        </div>
        <div className="row-span-2">
          <label for="notes">Notes:</label><br></br>
          <textarea id="notes" name="notes" rows="12" cols="25"></textarea>
        </div>
      </form>
    </div>
  )
}

export default petInfo