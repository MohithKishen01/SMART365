/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team(s) H/A Goal %</font></H5>    
*/

function isValidStatus_T1_106510323 (xmlDoc)
{
    var bStatus = false;

    var nodeList = xmlDoc.getElementsByTagName (UDModule.GkSR_Status);
    if (nodeList != null && nodeList.length > 0)
    {
        for (var nIndex = 0; nIndex < nodeList.length; nIndex++)
        {
            var objNode = nodeList [nIndex];
            var arrInfo = UDModule.DOM.getXMLIndexValue (objNode, 0).split (UDModule.Gk_DATA_SEP);
            bStatus = false;

            if (arrInfo [UDModule.GkS_STATUSID] == -1)
            {
                switch (parseInt (arrInfo [UDModule.GkS_TASKID]))
                {
                    case T1_FunctionPM:
                        alert (m_arrMessages_T1 [iM1_FunctionPM]);
                        break;
                    case T1_Leagues:
                        alert (m_arrMessages_T1 [iM1_Leagues]);
                        break;					               
                }
                break;
            }
            else
                bStatus = true;
        }
    }
    return bStatus;
}

function isValidStatus_T4_106510323 (xmlDoc)
{
    var bStatus = false;

    var nodeList = xmlDoc.getElementsByTagName (UDModule.GkSR_Status);
    if (nodeList != null && nodeList.length > 0)
    {
        for (var nIndex = 0; nIndex < nodeList.length; nIndex++)
        {
            var objNode = nodeList [nIndex];
            var arrInfo = UDModule.DOM.getXMLIndexValue (objNode, 0).split (UDModule.Gk_DATA_SEP);
            bStatus = false;

            if (arrInfo [UDModule.GkS_STATUSID] == -1)
            {
                switch (parseInt (arrInfo [UDModule.GkS_TASKID]))
                {      
					case T4_Seasons:
                        alert (m_arrMessages_T4 [iM4_Seasons]);
                        break;                                  
                }
                break;
            }
            else
                bStatus = true;
        }
    }
    return bStatus;
}

function isValidStatus_T5_106510323 (xmlDoc)
{
    var bStatus = false;

    var nodeList = xmlDoc.getElementsByTagName (UDModule.GkSR_Status);
    if (nodeList != null && nodeList.length > 0)
    {
        for (var nIndex = 0; nIndex < nodeList.length; nIndex++)
        {
            var objNode = nodeList [nIndex];
            var arrInfo = UDModule.DOM.getXMLIndexValue (objNode, 0).split (UDModule.Gk_DATA_SEP);
            bStatus = false;

            if (arrInfo [UDModule.GkS_STATUSID] == -1)
            {
                switch (parseInt (arrInfo [UDModule.GkS_TASKID]))
                {      
					case T5_Teams:
                        alert (m_arrMessages_T5 [iM5_Teams]);
                        break;                                  
                }
                break;
            }
            else
                bStatus = true;
        }
    }
    return bStatus;
}

function isValidStatus_T6_106510323 (xmlDoc)
{
    var bStatus = false;

    var nodeList = xmlDoc.getElementsByTagName (UDModule.GkSR_Status);
    if (nodeList != null && nodeList.length > 0)
    {
        for (var nIndex = 0; nIndex < nodeList.length; nIndex++)
        {
            var objNode = nodeList [nIndex];
            var arrInfo = UDModule.DOM.getXMLIndexValue (objNode, 0).split (UDModule.Gk_DATA_SEP);
            bStatus = false;

            if (arrInfo [UDModule.GkS_STATUSID] == -1)
            {
                switch (parseInt (arrInfo [UDModule.GkS_TASKID]))
                {      
					case T6_TeamOD:
                        alert (m_arrMessages_T6 [iM6_TeamOD]);
                        break;
					case T6_LeagueTable:
                        alert (m_arrMessages_T6 [iM6_LeagueTable]);
                        break;
                }
                break;
            }
            else
                bStatus = true;
        }
    }
    return bStatus;
}