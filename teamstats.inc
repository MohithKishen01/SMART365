<table class="table_bg" width="980" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td>
            <table class="fieldtitle" width="980" cellpadding="0" cellspacing="0" border="0">
                <tr height="22">
                    <td class="title_module" width="930">
                        &nbsp;Soccer<font class="module_sep">&nbsp;&raquo;&nbsp;</font>Team Statistics
                    </td>
                    <td class="help_module" width="50" align="center">
                        <font class="cursor" title="Click here to view help..." onclick="UDModule.PROJ.helpClicked ()">Help</font>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td class="border_left_bottom_right">
            <table class="fieldtitle" align="right" cellpadding="0" cellspacing="0" border="0">
                <tr height="26">                    
                    <td>
                        League
                    </td>
                    <td width="10">
                    </td>
                    <td>
                        Season
                    </td>
                    <td width="10">
                    </td>
                    <td>
                        Team
                    </td>
                    <td width="10">
                    </td>
                    <td>
                        &nbsp;
                    </td>
                    <td width="5">
                    </td>
                </tr>
                <tr height="26">                    
                    <td>
                        <select class="dropdown" id="cbLeagues" onchange="leagueChanged_106510324 ()" onkeyup="UDModule.COMP.changeFocus_CV (event, 'cbSeasons')">
                            <option value="0">[Choose One]</option>
                        </select>
                    </td>                    
                    <td width="10">
                    </td>
                    <td>
                        <select class="dropdown" id="cbSeasons" onchange="seasonChanged_106510324 ()" onkeyup="UDModule.COMP.changeFocus_CV (event, 'cbTeams')">
                            <option value="0">[Choose One]</option>
                        </select>
                    </td>
                    <td width="10">
                    </td>                    
                    <td>
                        <select class="dropdown" id="cbTeams" onchange="teamChanged_106510324 ()" onkeyup="UDModule.COMP.changeFocus_CV (event, 'btnShow')">
                            <option value="0">[Choose One]</option>
                        </select>
                    </td>
                    <td width="10">
                    </td>
                    <td>
                        <input type="button" id="btnShow" class="button" value="Show" onclick="showClicked_106510324 ()" />
                    </td>
                    <td>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>