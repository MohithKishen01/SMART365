<table class="table_bg" width="900" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td>
            <table id="tblMain" class="fieldtitle" width="900" cellpadding="0" cellspacing="0" border="0">
                <tr height="22">
                    <td class="title_module" width="850">
                        &nbsp;Soccer<font class="module_sep">&nbsp;&raquo;&nbsp;</font>Team(s) H/A Goal %
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
                        Leagues
                    </td>
                    <td width="10">
                    </td>                    
					<td>
						Season
					</td>
					<td width="10">
					</td>
					<td>
						Live Status
					</td>
					<td width="10">
					</td>
					<td>
						From Date
					</td>
					<td width="10">
					</td>
					<td>
						To Date
					</td>
					<td width="10">
					</td>
					<td>
						<table class="fieldtitle" cellpadding="0" cellspacing="0" border="0">
							<tr>
								<td id="tdShowTeams" width="80">
									<font class="boldlink" onclick="lblShowClicked_TL_106510323 ()" title="Click here to show Teams">Show Teams</font>
								</td>
								<td id="tdHideTeams" width="80" style="display:none;">
									<font class="more_filters" onclick="lblHideClicked_TL_106510323 ()" title="Click here to Hide Teams">Hide Teams</font>
								</td>
							</tr>
						</table>
					</td>
					<td width="5">
					</td>				                   
                </tr>
                <tr height="26">
                    <td>
                        <select class="dropdown" id="cbLeagues" onchange="leagueChanged_106510323 ()">
                            <option value="-1">Choose One</option>                            
                        </select>
                    </td>
                    <td>
                    </td>                    
					<td>
						<select class="dropdown" id="cbSeason" onchange="seasonChanged_106510323 ()">
							<option value="0">[Choose One]</option>							
						</select>
					</td>
					<td>
					</td>
					<td>
						<select class="dropdown" id="cbLiveStatus" onchange="liveStatusChanged_106510323 ()">							
							<option value="-1">All</option>
							<option value="0">Live</option>
							<option value="1">Non-Live</option>
						</select>
					</td>
					<td>
					</td>
					<td>
						<input type="textbox" id="txtFromDate" class="textboxcenter" maxlength="10" size="10" />
						<img src="../../../resource/images/default/info/date.gif" class="cursor" onclick="du_openDatePicker (txtFromDate)" />
					</td>
					<td>
					</td>
					<td>
						<input type="textbox" id="txtToDate" class="textboxcenter" maxlength="10" size="10" />
						<img src="../../../resource/images/default/info/date.gif" class="cursor" onclick="du_openDatePicker (txtToDate)" />
					</td>
					<td>
					</td>
					<td id="tdShow" align="right">
						<input type="button" id="btnShow" class="button" value="Show" onclick="showClicked_106510323 ()" />&nbsp;
					</td>
					<td>
					</td>							
                </tr>
            </table>
        </td>
    </tr>	
    <tr height="10">
        <td>
        </td>
    </tr>
	<tr>
		<td>
			<table class="fieldtitle" align="center" cellpadding="0" cellspacing="0" border="0">				
				<tr id="trTeamList" style="display:none;">
					<td id="tdTeamList" class="border_top_left_bottom_right" valign="top">
						&nbsp;
					</td>
				</tr>							
			</table>
		</td>
	</tr>            
</table>